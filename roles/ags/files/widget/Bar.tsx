import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import Battery from "gi://AstalBattery"
import { createBinding } from "ags"
import { VerticalClock } from "./modules/clock"
import { VerticalWorkspaces } from "./modules/workspace"
import { toggleControlCenter } from "./home-center/home-center"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const battery = Battery.get_default()
  const percentage = createBinding(battery, "percentage")
  const { TOP, LEFT, BOTTOM } = Astal.WindowAnchor

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
          <button
            onClicked={(self) => {
              toggleControlCenter()
              self.grab_focus()
            }}
          >
            <label label="🏠" />
          </button>
          <button onClicked={() => console.log("hole mami")}>
            <label label={percentage((p) => `🔋 ${Math.round(p * 100)}%`)} />
          </button>
          <VerticalClock />
        </box>

        <box $type="center" orientation={Gtk.Orientation.VERTICAL}>
          <VerticalWorkspaces />
        </box>

        <box
          $type="end"
          orientation={Gtk.Orientation.VERTICAL}
          valign={Gtk.Align.END}
        ></box>
      </centerbox>
    </window>
  )
}
