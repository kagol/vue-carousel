import Theme from 'vitepress/dist/client/theme-default/index'
import Carousel from '../../../carousel'

import { registerComponents } from './register-components.js'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './index.scss'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Carousel)
    registerComponents(app)
  },
};
