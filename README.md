# Vue DevUI Carousel

一个简单、灵活的`Vue3`走马灯组件，非常轻量，只有`5kB`。

预览地址：
[https://kagol.gitee.io/vue-carousel/](https://kagol.gitee.io/vue-carousel/)

## 快速开始

创建一个vite工程：

```
yarn create vite vite-demo --template vue-ts
```

安装`Carousel`：
```
yarn add vue-devui-carousel
```

在`main.ts`中引入`Carousel`：
```
import Carousel from 'vue-devui-carousel'
import 'vue-devui-carousel/dist/style.css'

createApp(App)
.use(Carousel)
.mount('#app')
```

在`App.vue`中使用：

```
<DCarousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
</DCarousel>
```

## 效果动图

默认效果：

![1-default.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/1-default.gif)

掘金活动：

![2-juejin.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/2-juejin.gif)

指示器位置：

![3-indicator-position.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/3-indicator-position.gif)

自定义指示器：

![4-custom-indicator.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/4-custom-indicator.gif)

分页器位置：

![5-pagination-position.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/5-pagination-position.gif)

自定义分页器：

![6-custom-pagination.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/6-custom-pagination.gif)

华为官网：

![7-huawei.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/7-huawei.gif)

QQ音乐：

![8-qqmusic.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/8-qqmusic.gif)

B站：

![9-bilibili.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/9-bilibili.gif)

手风琴式折叠卡片：

![10-collapse-card.gif](https://unpkg.com/vue-devui-carousel@0.0.9/dist/10-collapse-card.gif)

## API

### DCarousel 组件

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

### DCarouselIndicator 组件

props

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| v-model | Number | 1    | 可选，当前页码 |
| count | Number | --    | 可选，指示器元素数量 |

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | ({ pageIndex, setPageIndex }) => {} | --    | 可选，默认插槽 |

### DCarouselPrev 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |

### DCarouselNext 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |

参考：

[用积木理论设计的Carousel组件都有哪些有趣的玩法？](https://juejin.cn/post/7056193763810476063/)
