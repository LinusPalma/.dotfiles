import { Astal, Gtk, Gdk } from "ags/gtk4"
import { createState } from "ags"
import app from "ags/gtk4/app"

const [isVisible, setIsVisible] = createState(false)

export default function ControlCenter(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor

  return (
    <window
      cssName="control-center"
      visible={isVisible}
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.NORMAL}
      anchor={TOP | LEFT}
      layer={Astal.Layer.OVERLAY}
      application={app}
      keymode={Astal.Keymode.ON_DEMAND}
    >
      <box cssName="control-center-box" orientation={Gtk.Orientation.VERTICAL}>
        <label label="Control Center" cssName="title" />

        <box orientation={Gtk.Orientation.VERTICAL} cssName="controls">
          {/* Buttons */}
          <box orientation={Gtk.Orientation.HORIZONTAL} cssName="button-row">
            <button cssName="control-button">
              <label label="💡" />
            </button>
            <button cssName="control-button">
              <label label="🌡️" />
            </button>
          </box>

          <box orientation={Gtk.Orientation.HORIZONTAL} cssName="button-row">
            <button cssName="control-button">
              <label label="🎵" />
            </button>
            <button cssName="control-button">
              <label label="🔌" />
            </button>
          </box>

          {/* Slider Example */}
          <box
            orientation={Gtk.Orientation.VERTICAL}
            cssName="slider-container"
          >
            <label label="🔆 Helligkeit" cssName="slider-label" />
            <slider min={0} max={100} value={50} cssName="brightness-slider" />
          </box>
        </box>
      </box>
    </window>
  )
}

export function toggleControlCenter() {
  setIsVisible((prev: boolean) => !prev)
}
