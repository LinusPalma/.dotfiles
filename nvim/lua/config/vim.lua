vim.cmd("set expandtab")
vim.cmd("set tabstop=2")
vim.cmd("set softtabstop=2")
vim.cmd("set shiftwidth=2")

vim.cmd("set clipboard=unnamedplus")

-- für copy & paste mit clipboard wenn nvim über ssh läuft:
vim.g.clipboard = 'osc52'
