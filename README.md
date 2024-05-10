# Vue Carousel

一个简单、灵活的`Vue3`走马灯组件，非常轻量，只有`5kB`。

预览地址：
[https://kagol.github.io/vue-carousel/](https://kagol.github.io/vue-carousel/)

## 快速开始

创建一个vite工程：

```
npm create vite vite-demo --template vue-ts
```

安装`Carousel`：
```
npm install @kagol/vue-carousel
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

```
<Carousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
</Carousel>
```

## 效果动图

默认效果：

![1-default.gif](https://pic.imgdb.cn/item/61f2b4932ab3f51d9107f30c.gif)

掘金活动：

![2-juejin.gif](https://pic.imgdb.cn/item/61f2b4932ab3f51d9107f315.gif)

指示器位置：

![3-indicator-position.gif](https://pic.imgdb.cn/item/61f2b4932ab3f51d9107f31c.gif)

自定义指示器：

![4-custom-indicator.gif](https://pic.imgdb.cn/item/61f2b4932ab3f51d9107f325.gif)

分页器位置：

![5-pagination-position.gif](https://pic.imgdb.cn/item/61f2b4932ab3f51d9107f32f.gif)

自定义分页器：

![6-custom-pagination.gif](https://pic.imgdb.cn/item/61f2b5282ab3f51d9108b5ef.gif)

华为官网：

![7-huawei.gif](https://pic.imgdb.cn/item/61f2b7bb2ab3f51d910d4651.gif)

QQ音乐：

![8-qqmusic.gif](https://pic.imgdb.cn/item/61f2bb5d2ab3f51d91146170.gif)

B站：

![9-bilibili.gif](https://pic.imgdb.cn/item/61f2b85e2ab3f51d910e65ab.gif)

手风琴式折叠卡片：

![10-collapse-card.gif](https://pic.imgdb.cn/item/61f2b6f42ab3f51d910bc018.gif)

## API

### Carousel 组件

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

### CarouselIndicator 组件

props

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| v-model | Number | 1    | 可选，当前页码 |
| count | Number | --    | 可选，指示器元素数量 |

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | ({ pageIndex, setPageIndex }) => {} | --    | 可选，默认插槽 |

### CarouselPrev 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |

### CarouselNext 组件

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |

参考：

[用积木理论设计的Carousel组件都有哪些有趣的玩法？](https://juejin.cn/post/7056193763810476063/)
