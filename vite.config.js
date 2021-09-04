// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signup: resolve(__dirname, 'signup/index.html')
      }
    }
  }
}












// vite.config.js excerpt:
// import { defineConfig } from 'vite'
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// export default defineConfig({
//   root: 'client',
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: dirname(fileURLToPath(import.meta.url + 'index.html')),
//         login: dirname(fileURLToPath(import.meta.url + 'login.html')),
//       }
//     }
//   },
// });

// main: new URL('./client/index.html', import.meta.url).pathname