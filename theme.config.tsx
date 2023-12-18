import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>SHD Cloud 文檔</span>,
	project: {
		link: "https://github.com/SHD-Development",
	},
	chat: {
		link: "https://discord.gg/shd-cloud-wang-meng-yun-1120284154957930588",
	},
	docsRepositoryBase: "https://github.com/SHD-Development",
	useNextSeoProps() {
		return {
			titleTemplate: "%t – SHD Cloud",
		};
	},
	/*banner: {
		key: "2.0-release",
		text: (
			<a href="https://nextra.site" target="_blank">
				🎉 Nextra 2.0 is released. Read more →
			</a>
		),
	},*/
	search: {
		placeholder: "在此搜尋...",
	},
	themeSwitch: {
		useOptions() {
			return {
				light: "淺色主題",
				dark: "深色主題",
				system: "系統",
			};
		},
	},
	footer: {
		text: "SHD Cloud 文檔",
	},
};

export default config;
