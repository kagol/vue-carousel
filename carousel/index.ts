import { App } from 'vue'
import DCarousel from './src/carousel'

export { DCarousel }

export default {
  install(app: App) {
    app.component(DCarousel.name, DCarousel)
  }
}