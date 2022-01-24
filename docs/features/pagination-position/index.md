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
import { defineComponent, ref, getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const { usePage } = getCurrentInstance().appContext.config.globalProperties
    const { pageIndex, prevPage, nextPage } = usePage(1)

    return { pageIndex, prevPage, nextPage }
  },
})
</script>
```

:::