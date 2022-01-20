import { App } from 'vue'
import DCarousel from './src/carousel'
import DCarouselIndicator from './src/components/carousel-indicator'
import DCarouselPrev from './src/components/carousel-prev'
import DCarouselNext from './src/components/carousel-next'
import usePage from './src/composables/use-page'

export { DCarousel, DCarouselIndicator, DCarouselPrev, DCarouselNext, usePage }

export default {
  install(app: App) {
    app.component(DCarousel.name, DCarousel)
    app.component(DCarouselIndicator.name, DCarouselIndicator)
    app.component(DCarouselPrev.name, DCarouselPrev)
    app.component(DCarouselNext.name, DCarouselNext)
  }
}