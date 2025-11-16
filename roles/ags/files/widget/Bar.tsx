import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import { readFile } from "ags/file"
import Battery from "gi://AstalBattery"
import { createBinding } from "ags"
import { VerticalClock } from "./clock"
import { toggleControlCenter } from "./control-center/ControlCenter"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const date = createPoll("", 1000, "date +%d.%m.%Y")
  const battery = Battery.get_default()
  const percentage = createBinding(battery, "percentage")
  const { TOP, LEFT, BOTTOM } = Astal.WindowAnchor

  // Home Assistant Token aus .env laden
  const envContent = readFile(`./.env`)
  const lines = envContent.split("\n")
  let HASS_TOKEN = ""
  for (const line of lines) {
    if (line.startsWith("HASS_TOKEN=")) {
      HASS_TOKEN = line.substring(11).trim()
      break
    }
  }

  function toggleBalkonLight() {
    execAsync([
      "curl",
      "-X",
      "POST",
      "-H",
      `Authorization: Bearer ${HASS_TOKEN}`,
      "-H",
      "Content-Type: application/json",
      "-d",
      '{"entity_id": "light.lichterkette_balkon"}',
      "https://ha.palma-homelab.com:443/api/services/light/turn_on",
    ])
      .then(() => console.log("Balkon Licht eingeschaltet"))
      .catch(console.error)
  }

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      // anchor={TOP | LEFT | RIGHT}
      anchor={LEFT | TOP | BOTTOM}
      application={app}
    >
      <centerbox cssName="centerbox" orientation={Gtk.Orientation.VERTICAL}>
        <box
          $type="start"
          orientation={Gtk.Orientation.VERTICAL}
          valign={Gtk.Align.START}
        >
          <button onClicked={(self) => {
            toggleControlCenter()
            self.grab_focus()
          }}>
            <label label="🏠" />
          </button>
          <button onClicked={toggleBalkonLight}>
            <label label="💡" />
          </button>
          <VerticalClock />
        </box>

        <box $type="center" orientation={Gtk.Orientation.VERTICAL} />

        <box
          $type="end"
          orientation={Gtk.Orientation.VERTICAL}
          valign={Gtk.Align.END}
        >
          <label label={percentage((p) => `🔋 ${Math.round(p * 100)}%`)} />
          <menubutton valign={Gtk.Align.CENTER}>
            <label label={date} />
            <popover>
              <Gtk.Calendar />
            </popover>
          </menubutton>
        </box>
      </centerbox>
    </window>
  )
}
