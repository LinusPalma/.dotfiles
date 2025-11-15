import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import { readFile } from "ags/file"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const date = createPoll("", 1000, "date +%d.%m.%Y")
  const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor

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
      anchor={TOP | LEFT | RIGHT}
      // anchor={LEFT | TOP | BOTTOM}
      application={app}
    >
      <centerbox cssName="centerbox">
        <box $type="start" halign={Gtk.Align.START}>
          <button onClicked={toggleBalkonLight}>
            <label label="💡 Balkon" />
          </button>
        </box>

        <box $type="center" />

        <menubutton
          $type="end"
          // hexpand
          halign={Gtk.Align.CENTER}
        >
          <label label={date} />
          <popover>
            <Gtk.Calendar />
          </popover>
        </menubutton>
      </centerbox>
    </window>
  )
}
