import { Gtk } from "ags/gtk4"
import Hyprland from "gi://AstalHyprland"

export default function VerticalWorkspaces() {
  const hyprland = Hyprland.get_default()
  
  const container = (
    <box
      cssName="workspaces"
      spacing={5}
      orientation={Gtk.Orientation.VERTICAL}
    />
  ) as Gtk.Box

  const updateWorkspaces = () => {
    // Alle alten Children entfernen
    let child = container.get_first_child()
    while (child) {
      const next = child.get_next_sibling()
      container.remove(child)
      child = next
    }
    
    // Workspaces holen und sortieren
    const workspaces = hyprland.get_workspaces().sort((a, b) => a.id - b.id)
    const focusedID = hyprland.get_focused_workspace()?.id
    
    // Für jeden Workspace einen Button erstellen
    workspaces.forEach((ws) => {
      const isActive = ws.id === focusedID
      const btn = new Gtk.Button({
        cssName: "workspace",
        css_classes: isActive ? ["active"] : [],
      })
      
      const label = new Gtk.Label({ label: ws.id.toString() })
      btn.set_child(label)
      btn.connect("clicked", () => hyprland.dispatch("workspace", ws.id.toString()))
      
      container.append(btn)
    })
  }
  
  // Initial rendern
  updateWorkspaces()
  
  // Bei Änderungen neu rendern
  const workspacesHandler = hyprland.connect("notify::workspaces", updateWorkspaces)
  const focusedHandler = hyprland.connect("notify::focused-workspace", updateWorkspaces)
  
  // Cleanup bei Destroy
  container.connect("destroy", () => {
    hyprland.disconnect(workspacesHandler)
    hyprland.disconnect(focusedHandler)
  })
  
  return container
}

/**
 * AstalHyprland API Reference
 *
 * Hauptobjekt Hyprland:
 * - get_default() - Singleton holen
 * - get_workspaces() - Liste aller Workspaces
 * - get_clients() - Liste aller Clients/Fenster
 * - get_monitors() - Liste aller Monitore
 * - get_focused_workspace() - Aktueller Workspace
 * - get_focused_monitor() - Aktueller Monitor
 * - get_focused_client() - Aktuelles Fenster
 * - dispatch(command, arg) - Hyprland-Befehle ausführen
 */
