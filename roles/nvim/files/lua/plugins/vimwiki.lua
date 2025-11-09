return {
	"vimwiki/vimwiki",
	event = "BufEnter *.md",
	keys = { "<leader>ww", "<leader>wt" },
	init = function()
		vim.g.vimwiki_list = {
			{
				path = "~/Nextcloud/homewiki/",
				syntax = "markdown",
				ext = "md",
			},
		}
		vim.g.vimwiki_ext2syntax = vim.empty_dict()
		vim.g.vimwiki_global_ext = 0
		
		vim.api.nvim_create_autocmd("FileType", {
			pattern = "vimwiki",
			callback = function()
				vim.bo.filetype = "markdown"
			end,
		})
	end,
}
