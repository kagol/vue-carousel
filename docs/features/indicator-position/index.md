# 指示器位置

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
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
```

:::