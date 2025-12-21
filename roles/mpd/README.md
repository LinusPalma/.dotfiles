# MPD + rmpc

Music Player Daemon mit rmpc TUI-Client.

## rmpc Keybinds

### Navigation
| Key | Aktion |
|-----|--------|
| `j` / `↓` | Runter |
| `k` / `↑` | Hoch |
| `h` / `←` | Zurück / Schließen |
| `l` / `→` / `Enter` | Öffnen / Auswählen |
| `g` | Zum Anfang |
| `G` | Zum Ende |
| `Ctrl+d` | Halbe Seite runter |
| `Ctrl+u` | Halbe Seite hoch |

### Playback
| Key | Aktion |
|-----|--------|
| `p` | Play/Pause |
| `s` | Stop |
| `>` | Nächster Track |
| `<` | Vorheriger Track |
| `f` | 5 Sek. vorwärts |
| `b` | 5 Sek. zurück |
| `+` / `=` | Lauter |
| `-` | Leiser |

### Modi
| Key | Aktion |
|-----|--------|
| `r` | Repeat toggle |
| `z` | Random/Shuffle toggle |
| `x` | Single toggle |
| `c` | Consume toggle |

### Tabs / Views
| Key | Aktion |
|-----|--------|
| `1` | Queue |
| `2` | Browser |
| `3` | Artists |
| `4` | Albums |
| `5` | Playlists |
| `6` | Search |

### Queue
| Key | Aktion |
|-----|--------|
| `a` | Zur Queue hinzufügen |
| `d` | Aus Queue entfernen |
| `C` | Queue leeren |
| `Space` | Track auswählen |

### Sonstiges
| Key | Aktion |
|-----|--------|
| `/` | Suche |
| `n` | Nächstes Suchergebnis |
| `N` | Vorheriges Suchergebnis |
| `u` | Datenbank aktualisieren |
| `q` | Beenden |
| `?` | Hilfe |

## mpc CLI Commands

```bash
# Playback
mpc play              # Abspielen
mpc pause             # Pause
mpc toggle            # Play/Pause toggle
mpc stop              # Stop
mpc next              # Nächster Track
mpc prev              # Vorheriger Track
mpc seek +10          # 10 Sek. vorwärts
mpc seek -10          # 10 Sek. zurück

# Volume
mpc volume +5         # Lauter
mpc volume -5         # Leiser
mpc volume 50         # Volume auf 50%

# Queue
mpc add /             # Alles zur Queue
mpc clear             # Queue leeren
mpc playlist          # Queue anzeigen

# Database
mpc update            # Datenbank aktualisieren
mpc stats             # Statistiken
mpc listall           # Alle Tracks auflisten

# Modi
mpc repeat            # Repeat toggle
mpc random            # Shuffle toggle
mpc single            # Single toggle

# Info
mpc status            # Aktueller Status
mpc current           # Aktueller Track
```
