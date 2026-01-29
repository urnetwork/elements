import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	plugins: [
		dts({
			include: ["src/**/*"],
			outDir: "dist",
		}),
	],
	build: {
		lib: {
			entry: {
				// Export your web components
				"components/button": resolve(
					__dirname,
					"src/components/button/index.ts",
				),
				"components/input": resolve(__dirname, "src/components/input/index.ts"),
				// Add other components as needed

				// Export React wrappers
				"react/button": resolve(__dirname, "src/react/button/index.ts"),
				"react/input": resolve(__dirname, "src/react/input/index.ts"),
			},
			formats: ["es"], // ESM format
		},
		rollupOptions: {
			// Externalize dependencies that shouldn't be bundled
			external: [
				"lit",
				"react",
				"react-dom",
				"@lit/react",
				"react/jsx-runtime",
			],
		},
	},
});
