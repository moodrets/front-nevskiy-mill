import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
    base: mode === 'development' ? '/' : '/front-nevskiy-mill/',
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        },
    }
}))