import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import type { ViteSSGOptions } from 'vite-ssg'

// Slug dei servizi con pagina di dettaglio propria (solo quelli con gallery
// fotografica, vedi src/data/services.ts). vite.config.ts non può importare
// quel file: contiene import di immagini che il loader di configurazione di
// Vite non sa risolvere. Tenere allineato manualmente.
const serviceSlugs = [
  'spose-e-cerimonie'
]

// https://vitejs.dev/config/
const config: UserConfig & { ssgOptions?: Partial<ViteSSGOptions> } = {
  plugins: [
    vue(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      jpeg: { quality: 80 }
    })
  ],
  ssgOptions: {
    includedRoutes() {
      return ['/', ...serviceSlugs.map((slug) => `/servizi/${slug}`)]
    }
  }
}

export default config