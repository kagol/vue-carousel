### 分页器位置

:::demo

```vue
<template>
<DCarousel v-model="pageIndex">
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination>
    <DCarouselPrev @click="prevPage" style="top: 40px; left: calc(100% - 110px);" />
    <DCarouselNext @click="nextPage" style="top: 40px;" />
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
    const { pageIndex, prevPage, nextPage } = usePage(1)

    return { pageIndex, prevPage, nextPage }
  },
})
</script>
```

:::