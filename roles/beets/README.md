Beets erlaubt es eine Music Library zu verwalten.

für den import:

```zsh
beet import -p ./folder
```

die lyrics mache ich mit einen plugin "lyrics"

die automatische suche war bislang erfolglos.

eigentlich würde es mit

```zsh
beet lyrics
```

die ganze Library scannen. aber bislang konnte ich es nicht zum laufen bekommen. --> die files wurden nicht gefunden.

als workarround lege ich dateien neben den .flac files mit dem gleicehn namen aber der erndung .lrc ab. dann suche ich die synced lyrics heraus und speichere sie ab.

die website:

https://lrclib.net/

war bislang super dafür.

danach lasse ich

```zsh
beet lyrics --local
```

laufen.

der Workflow ist so:

1. Musik kaufen --> download als .zip in Downloads
2. entpacken
3. beet import folder / file
4. .lrc files erstllen
5. beet lyrics --local
