-- Diagnostics Config (für ALLE Server)
vim.diagnostic.config({
  virtual_lines = true,
  virtual_text = false,
  signs = true,
  underline = true,
  update_in_insert = false,
  severity_sort = true,
})

-- Diagnostic Icons
local signs = {
  Error = "󰅚 ",
  Warn = "󰀪 ",
  Hint = "󰌶 ",
  Info = " "
}
for type, icon in pairs(signs) do
  local hl = "DiagnosticSign" .. type
  vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = hl })
end

-- Keymaps für ALLE Server
vim.api.nvim_create_autocmd("LspAttach", {
  callback = function(event)
    local map = function(keys, func, desc)
      vim.keymap.set("n", keys, func, { buffer = event.buf, desc = desc })
    end
    map("<leader>k", vim.lsp.buf.hover, "Hover Docs")
    map("gd", vim.lsp.buf.definition, "Go to Definition")
    map("gr", vim.lsp.buf.references, "References")
    map("gi", vim.lsp.buf.implementation, "Go to Implementation")
    map("<leader>ca", vim.lsp.buf.code_action, "Code Action")
    map("<leader>rn", vim.lsp.buf.rename, "Rename Symbol")
    map("<leader>f", vim.lsp.buf.format, "Format Buffer")
    map("<leader>d", vim.diagnostic.open_float, "Show Diagnostic")
  end,
})

-- ===== EXPLIZITE SERVER-LISTE =====
-- Nur diese Server werden geladen!
local enabled_servers = {
  "lua_ls",
  -- "ts_ls",  -- Auskommentiert = deaktiviert
}
-- Server laden
for _, server in ipairs(enabled_servers) do
  require("config.lsp." .. server)
end
