import {defineConfig} from 'vite';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/app.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: /^lit/
        },
    },
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    base: "./"
});
