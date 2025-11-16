import { createPoll } from "ags/time"
import { Gtk } from "ags/gtk4"

export default function VerticalClock() {
  const hour = createPoll("", 1000, "date +%k")
  const minute = createPoll("", 1000, "date +%M")
  const date = createPoll("", 1000, "date +%d.%m")

  return (
    <menubutton cssName="vertical-clock" valign={Gtk.Align.CENTER}>
      <box orientation={Gtk.Orientation.VERTICAL}>
        <label cssName="clock" label={hour} />
        <label cssName="clock" label={minute} />
        <label cssName="date" label={date} />
      </box>
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}
