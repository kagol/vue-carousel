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
  <label><input type="radio" @click="position = 'flex-start'" name="position" defaultChecked />左下角</label>
  <label><input type="radio" @click="position = 'center'" name="position" />中间</label>
  <label><input type="radio" @click="position = 'flex-end'" name="position" />右下角</label>
  <DCarousel v-model="pageIndex">
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
    <template #indicator>
      <DCarouselIndicator
        :count="3"
        v-model="pageIndex"
        :style="{
          'justify-content': position,
        }"
      ></DCarouselIndicator>
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
    const position = ref('left')
    return { pageIndex, setPageIndex, position }
  },
})
</script>
```

:::
