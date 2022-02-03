import Theme from 'vitepress/dist/client/theme-default'
import DCarousel from '../../../carousel'

import { registerComponents } from './register-components.js'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './index.scss'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(DCarousel)
    registerComponents(app)
  },
};
