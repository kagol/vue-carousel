# Carousel 走马灯

### 基本用法

:::demo `Carousel`组件提供了默认插槽，直接将元素放在`<DCarousel>`即可实现轮播效果。

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

:::

### 掘金活动

:::demo `<DCarousel>`元素里面可以放任意元素，比如放上两张图片就是掘金活动的效果。

```vue
<template>
  <DCarousel style="width: 470px; height: 280px;">
    <img
      src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4dda7abf534e098f04fe0e968b1e0c~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:940:560.awebp?"
      height="280"
    />
    <img
      src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5b0b404fcb44ac9fb1359334186b46~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:940:560.awebp?"
      height="280"
    />
  </DCarousel>
</template>
```

:::

### 自定义指示器位置

:::demo `<DCarousel>`组件将其中的指示器子组件暴露出来，并提供了`indicator`插槽，因此可以随意调整`DCarouselIndicator`的位置，比如放在左下角。

```vue
<template>
  <DCarousel v-model="pageIndex">
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
    <template #indicator>
      <DCarouselIndicator :count="3" v-model="pageIndex" style="justify-content: flex-start; padding-left: 20px;"></DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<script>
import { defineComponent, ref } from 'vue'

function usePage(defaultPageIndex = 1) {
  const pageIndex = ref(defaultPageIndex)

  const setPageIndex = (current: number) => {
    pageIndex.value = current
  }

  const jumpPage = (page: number) => {
    pageIndex.value += page
  }

  const prevPage = () => jumpPage(-1)

  const nextPage = () => jumpPage(1)

  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage }
}

export default defineComponent({
  setup() {
    const { pageIndex, setPageIndex } = usePage(1)
    return { pageIndex, setPageIndex }
  },
})
</script>
```

:::

### 自定义指示器

:::demo 如果`Carousel`内置的`CarouselIndicator`指示器不满足你的要求，还可以定制自己的指示器。

```vue
<template>
  <DCarousel v-model="pageIndex">
    <div class="carousel-item carousel-item-dark">page 1</div>
    <div class="carousel-item carousel-item-dark">page 2</div>
    <div class="carousel-item carousel-item-dark">page 3</div>
    <template #indicator>
      <DCarouselIndicator :count="3" v-model="pageIndex" style="justify-content: flex-start; padding-left: 20px;">
        <div
          :class="['carousel-indicator-item', pageIndex === item+1 ? 'active' : '']"
          v-for="item of indicatorArr"
          :key="item"
          @click="setPageIndex(item+1)"
        ></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</tempalte>
<script>
import { defineComponent, ref } from 'vue'

function usePage(defaultPageIndex = 1) {
  const pageIndex = ref(defaultPageIndex)

  const setPageIndex = (current: number) => {
    pageIndex.value = current
  }

  const jumpPage = (page: number) => {
    pageIndex.value += page
  }

  const prevPage = () => jumpPage(-1)

  const nextPage = () => jumpPage(1)

  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage }
}


export default defineComponent({
  setup() {
    const { pageIndex, setPageIndex } = usePage(1)
    const indicatorArr = Array.from(new Array(3).keys())

    return { pageIndex, setPageIndex, indicatorArr }
  },
})
</script>
<style>
.carousel-item-dark {
  background-color: rgb(135, 164, 186);
  color: #fff;
}

.carousel-indicator-item {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: var(--devui-icon-fill, #d3d5d9);
  overflow: hidden;
  cursor: pointer;
}

.carousel-indicator-item.active {
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
```

:::
