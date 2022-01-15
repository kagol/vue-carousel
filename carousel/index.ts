import { App } from 'vue'
import DCarousel from './src/carousel'
import DCarouselIndicator from './src/components/carousel-indicator'
import DCarouselPagination from './src/components/carousel-pagination'
import usePage from './src/composables/use-page'

export { DCarousel, DCarouselIndicator, DCarouselPagination, usePage }

export default {
  install(app: App) {
    app.component(DCarousel.name, DCarousel)
    app.component(DCarouselIndicator.name, DCarouselIndicator)
    app.component(DCarouselPagination.name, DCarouselPagination)
  }
}