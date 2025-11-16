import { readFile } from "ags/file"
import { execAsync } from "ags/process"
import { Gtk } from "ags/gtk4"

interface SceneToggleProps {
  sceneName: string
  icon: string
}

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

export default function SceneToggle({ sceneName, icon }: SceneToggleProps) {
  function activateScene() {
    execAsync([
      "curl",
      "-X",
      "POST",
      "-H",
      `Authorization: Bearer ${HASS_TOKEN}`,
      "-H",
      "Content-Type: application/json",
      "-d",
      `{"entity_id": "scene.${sceneName}"}`,
      "https://ha.palma-homelab.com:443/api/services/scene/turn_on",
    ])
      .then(() => console.log(`Scene ${sceneName} aktiviert`))
      .catch(console.error)
  }

  return (
    <button cssName="control-button" onClicked={activateScene}>
      <label label={icon} />
    </button>
  )
}
