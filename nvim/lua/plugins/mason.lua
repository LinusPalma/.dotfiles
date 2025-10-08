-- liste mit möglichen language servern:
-- https://mason-registry.dev/registry/list
return {
  "williamboman/mason.nvim",
  config = function()
    require("mason").setup({
      ui = {
        icons = {
          package_installed = "✓",
          package_pending = "➜",
          package_uninstalled = "✗"
        }
      }
    })

    -- Auto-Install Server
    local servers = {
      "lua-language-server",
      "typescript-language-server",
    }

    local registry = require("mason-registry")
    for _, server in ipairs(servers) do
      if not registry.is_installed(server) then
        vim.cmd("MasonInstall " .. server)
      end
    end
  end
}
