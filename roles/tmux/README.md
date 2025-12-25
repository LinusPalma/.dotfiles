# tmux Crashkurs

> Prefix-Taste: `Ctrl+b` (Standard) – muss vor den meisten Befehlen gedrückt werden.

## 1. Session erstellen

```bash
tmux                      # Neue Session (automatischer Name)
tmux new -s meinesession  # Neue Session mit Namen
```

## 2. Sessions auflisten

```bash
tmux ls                   # Alle Sessions anzeigen
tmux list-sessions        # Alternativ
```

## 3. Navigation

### Zwischen Sessions
| Tastenkombination | Aktion |
|-------------------|--------|
| `Prefix` + `s` | Session-Liste anzeigen & wechseln |
| `Prefix` + `(` | Vorherige Session |
| `Prefix` + `)` | Nächste Session |

### Zwischen Windows (Tabs)
| Tastenkombination | Aktion |
|-------------------|--------|
| `Prefix` + `c` | Neues Window erstellen |
| `Prefix` + `n` | Nächstes Window |
| `Prefix` + `p` | Vorheriges Window |
| `Prefix` + `0-9` | Window nach Nummer |
| `Prefix` + `w` | Window-Liste anzeigen |

### Zwischen Panes (Splits)
| Tastenkombination | Aktion |
|-------------------|--------|
| `Prefix` + `\|` | Vertikal splitten |
| `Prefix` + `-` | Horizontal splitten |
| `Prefix` + `Pfeiltasten` | Zwischen Panes wechseln |
| `Prefix` + `z` | Pane maximieren/minimieren |
| `Prefix` + `x` | Aktuelles Pane schließen |

## 4. Session verlassen (Detach)

```bash
Prefix + d                # Session im Hintergrund laufen lassen
```

Wieder verbinden:
```bash
tmux a                    # Letzte Session
tmux a -t meinesession    # Bestimmte Session
tmux attach -t meinesession
```

## 5. Session löschen (Kill)

```bash
tmux kill-session -t meinesession   # Bestimmte Session beenden
tmux kill-server                    # Alle Sessions beenden
```

Innerhalb von tmux:
```
Prefix + :kill-session              # Aktuelle Session beenden
```

---

## Spickzettel

| Befehl | Beschreibung |
|--------|--------------|
| `tmux new -s name` | Neue Session |
| `tmux ls` | Sessions auflisten |
| `tmux a -t name` | Session verbinden |
| `Prefix + d` | Detach |
| `tmux kill-session -t name` | Session löschen |
| `Prefix + ?` | Alle Tastenkürzel anzeigen |
