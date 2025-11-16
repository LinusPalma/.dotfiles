import { createPoll } from "ags/time"
import { Gtk } from "ags/gtk4"

export default function VerticalClock() {
  const hour = createPoll("", 1000, "date +%k")
  const minute = createPoll("", 1000, "date +%M")

  return (
    <box cssName="vertical-clock" orientation={Gtk.Orientation.VERTICAL}>
      <label label={hour} />
      <label label={minute} />
    </box>
  )
}
