import { createApp } from 'vue'
import App from './App.vue'
// import Carousel from '../dist/vue-carousel.es'
// import '../dist/style.css'
import Carousel from '@kagol/vue-carousel'

createApp(App)
.use(Carousel)
.mount('#app')
