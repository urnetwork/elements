import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	plugins: [dts({ include: ["src/**/*"], outDir: "dist" })],
	build: {
		lib: {
			entry: {
				"components/button": resolve(
					__dirname,
					"src/components/button/index.ts",
				),
				"components/input": resolve(__dirname, "src/components/input/index.ts"),
				"react/button": resolve(__dirname, "src/react/button/index.ts"),
				"react/input": resolve(__dirname, "src/react/input/index.ts"),
				styles: resolve(__dirname, "src/styles.ts"),
			},
			formats: ["es"],
		},
		rollupOptions: {
			external: [
				"lit",
				"react",
				"react-dom",
				"@lit/react",
				"react/jsx-runtime",
			],
			output: {
				// Force the name to be 'styles.css'
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith(".css")) {
						return "assets/styles.css";
					}
					return "assets/[name][extname]";
				},
			},
		},
		assetsInlineLimit: 100000000,
		cssCodeSplit: true,
	},
});
