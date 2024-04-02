import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react({
      babel: {
        plugins: [['module:@preact/signals-react-transform']],
      },
    })],
    define: {
      'import.meta.env.CONFIG': JSON.stringify(env),
    },
  }
})

// defineConfig({
//   plugins: [react({
//     babel: {
//       plugins: [['module:@preact/signals-react-transform']],
//     },
//   })],
// })
