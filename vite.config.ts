import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/MyPortfolio/", // The base URL for your app
  plugins: [react()],     // Corrected key 'plugins' instead of 'plugin'
})
=======
  Plugins:[react()],
  base: '/saaysalim.github.io-master',
});
=======
export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/',  // Adjust base URL if necessary
  build: {
    outDir: 'public',  // Output to public folder
  },
})
>>>>>>> f7190ba241bd0390e6f9fcd4d8c986e3a79ca58a


>>>>>>> main
