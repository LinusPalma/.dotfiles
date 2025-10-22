return {
	"lewis6991/gitsigns.nvim",
	config = function()
		require("gitsigns").setup({
			on_attach = function(bufnr)
				local gitsigns = require("gitsigns")
				--vim.keymap.set("n", "<leader>hs", gitsigns.stage_hunk, { buffer = bufnr })
				vim.keymap.set("n", "<leader>gs", gitsigns.stage_hunk, { buffer = bufnr })
			end,
		})
	end,
}
