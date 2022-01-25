import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "特性", children: [
        { text: "自动播放", link: "/features/autoplay/" },
        { text: "掘金活动", link: "/features/juejin-events/" },
        { text: "指示器位置", link: "/features/indicator-position/" },
        { text: "自定义指示器", link: "/features/custom-indicator/" },
        { text: "分页器位置", link: "/features/pagination-position/" },
        { text: "自定义分页器", link: "/features/custom-pagination/" },
        { text: "手风琴式折叠卡片", link: "/features/collapse-card/" },
        { text: "华为", link: "/features/huawei-events/" },
        { text: "B站", link: "/features/bilibili-events/" },
        { text: "QQ音乐", link: "/features/qqmusic/" },
        { text: "LeetCode", link: "/features/leetcode-card/" },
      ]
    }
  ]
}

const config = {
  base: '/vue-carousel/',
  title: 'Vue DevUI Carousel',
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
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }
}

export default config
