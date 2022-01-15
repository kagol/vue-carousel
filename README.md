# Vue DevUI Carousel

一个简单、灵活的`Vue3`走马灯组件，非常轻量，只有`3.9kB`。

## 基本用法

```
<DCarousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
</DCarousel>
```

## API

### DCarousel 组件

props

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| v-model | Number | 1    | 可选，当前页码 |

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

### DCarouselPagination 组件

emits

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| prev | -- | --    | 可选，上一页 |
| next | -- | --    | 可选，下一页 |

插槽

| 属性    | 类型   | 默认 | 说明           |
| ------- | ------ | ---- | -------------- |
| default | -- | --    | 可选，默认插槽 |
