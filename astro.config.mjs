import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: { src: "./src/assets/logo-horizontal.svg", replacesTitle: true },
			title: "Fast-Weigh Docs",
			description: "Documentation for Fast-Weigh",
			social: {
				github: "https://github.com/tacinsight/fw-help-docs",
			},
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/custom.css",
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", link: "/guides/example/" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
