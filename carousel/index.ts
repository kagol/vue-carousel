import { App } from 'vue'
// import { usePage } from 'vueuse-components'
import usePage from './src/composables/use-page'
import Carousel from './src/carousel'
import CarouselIndicator from './src/components/carousel-indicator'
import CarouselPrev from './src/components/carousel-prev'
import CarouselNext from './src/components/carousel-next'

export { Carousel, CarouselIndicator, CarouselPrev, CarouselNext, usePage }

export default {
  install(app: App) {
    app.component(Carousel.name, Carousel)
    app.component(CarouselIndicator.name, CarouselIndicator)
    app.component(CarouselPrev.name, CarouselPrev)
    app.component(CarouselNext.name, CarouselNext)
    app.config.globalProperties.usePage = usePage
  }
}