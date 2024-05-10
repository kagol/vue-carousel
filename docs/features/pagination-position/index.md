### 分页器位置

:::demo

```vue
<template>
<Carousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination="page">
    <CarouselPrev @click="page.prevPage" style="top: 40px; left: calc(100% - 110px);" />
    <CarouselNext @click="page.nextPage" style="top: 40px;" />
  </template>
</Carousel>
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