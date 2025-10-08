vim.cmd("set expandtab")
vim.cmd("set tabstop=2")
vim.cmd("set softtabstop=2")
vim.cmd("set shiftwidth=2")

vim.cmd("set clipboard=unnamedplus")

-- für copy & paste mit clipboard wenn nvim über ssh läuft:
vim.g.clipboard = 'osc52'
vim.o.winborder = 'rounded'


vim.opt.autowrite = true
vim.opt.autowriteall = true


-- Format on Save
vim.api.nvim_create_autocmd("BufWritePre", {
  callback = function()
    vim.lsp.buf.format({ timeout_ms = 2000 })
  end,
})
