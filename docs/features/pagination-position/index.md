### 分页器位置

:::demo

```vue
<template>
<DCarousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination="page">
    <DCarouselPrev @click="page.prevPage" style="top: 40px; left: calc(100% - 110px);" />
    <DCarouselNext @click="page.nextPage" style="top: 40px;" />
  </template>
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