import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  "/": [
    { text: "Carousel 走马灯", link: "/" }
  ]
}

const config = {
  title: 'DevUI',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' }],
  ],
  themeConfig: {
    sidebar,
    logo: '/assets/logo.svg',
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}

export default config
