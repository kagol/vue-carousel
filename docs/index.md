# 快速开始

创建一个vite工程：

```
yarn create vite vite-demo --template vue-ts
```

安装`Carousel`：
```
yarn add @kagol/vue-carousel
```

在`main.ts`中引入`Carousel`：
```
import Carousel from '@kagol/vue-carousel'
import '@kagol/vue-carousel/dist/style.css'

createApp(App)
.use(Carousel)
.mount('#app')
```

在`App.vue`中使用：

```vue
<template>
  <DCarousel>
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
  </DCarousel>
</template>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
```

### API

<br>

#### DCarousel 组件

props

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| v-model | Number | 1    | 可选，当前页码 |
| autoplay | Boolean | true    | 可选，是否自动播放 |
| interval | Number | 3000    | 可选，自动播放的时间间隔，单位是毫秒 |

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 必选，默认插槽 |
| indicator | -- | --    | 可选，指示器插槽 |
| pagination | -- | --    | 可选，分页器插槽 |

#### DCarouselIndicator 组件

props

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| v-model | Number | 1    | 可选，当前页码 |
| count | Number | --    | 可选，指示器元素数量 |

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | ({ pageIndex, setPageIndex }) => {} | --    | 可选，默认插槽 |

#### DCarouselPrev 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |

#### DCarouselNext 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |
