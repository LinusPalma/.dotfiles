# Ansible Dotfiles & System-configs

## Motivation
Seit ich das erste Mal über fastfetch gestolpert bin, freue ich mich jedes Mal, wenn ich ein Terminal öffne und die ASCII-Art meiner Distro sehen kann.

Mit einem wachsenden Homelab habe ich jedoch immer wieder das Problem, meine Konfigurationen (zsh, omz, p10k, fastfetch, nvim) auf jedem Server auf dem neuesten Stand zu halten. Dazu kommt die Herausforderung, die Server selbst kontinuierlich zu aktualisieren und zu warten.

einen ersten Kontakt mit deklarativen Systemen hatte ich beim Aufsetzen meines NixOS-Clients – dieser reproduzierbare Ansatz hat mich seither überzeugt. Im Rahmen meiner "Homelab-Journey" habe ich immer mehr mit dem Gedanken gespielt, mich intensiver mit Ansible zu beschäftigen.

Nun ist der Tag gekommen, an dem ich das Tool ausprobiere. Dabei kam mir die Idee, dass Ansible nicht nur bei der Server-Verwaltung hilft, sondern auch perfekt dafür geeignet ist, Konfigurationen selektiv mit Symlinks zu verteilen und gleich die jeweiligen Programme zu installieren.

## Anforderungen

- Reproduzierbare System-Setups
- Sync von Configs über mehrere Systeme (rollenbasiert: server, client, common)
- Multi-Distro Support (Arch, Ubuntu, Debian, Fedora, Windows?)
- Selektive Tool-Installation je nach Rolle/System

## Struktur

```txt
~/.dotfiles/
├── ansible/
│   ├── playbook.yml
│   └── roles/
│       ├── waybar/
│       ├── hyprland/
│       ├── zsh/
│       └── nvim/
├── waybar/
│   └── config.toml
├── hypr/
│   └── hyprland.conf
└── nvim/
    └── init.lua
```

## Setup auf neuer Maschine

1. Basis installieren

```bash
sudo pacman -S git ansible
```

```bash
sudo apt install git ansible
```

```bash
sudo dnf install git ansible
```

2. Repo clonen

```bash
git clone https://github.com/linuspalma/dotfiles.git ~/.dotfiles
cd ~/.dotfiles/ansible
```

3. Playbook ausführen

für Desktop-Clients:
```bash
ansible-playbook playbook.yml --tags client --ask-become-pass
```

für Server (nur CLI Tools):
```bash
ansible-playbook playbook.yml --tags server,common --ask-become-pass
```


## Tags

Tags sollen in dem ganzen Repo als essenzeiller Enabler dienen! Sie sollen ermöglichen eine gemeinsame .dotfiles Repo zu pflegen und je nach System selektiv Configs / Installaiton auszuführen.
Die wichtigesten Tags solen dabei sein:

- `client` - Desktop-spezifische Tools (Hyprland, etc.)
- `server` - Server-only Tools
- `common` - Überall (zsh, nvim, tmux, etc.)


## Future Features

Profiles via Tags:

- Rice - Profiles: Future-Themed-Rice, Pink-Minimalist-Rice
- User - Profiles: User Dependent Tags
- Use-Case - Profiles: Gamin, Working, Coding


