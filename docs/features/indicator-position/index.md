# 指示器位置

`<Carousel>`组件将其中的指示器子组件暴露出来，并提供了`indicator`插槽，因此可以随意调整`CarouselIndicator`的位置，比如放在左下角。

:::demo

```vue
<template>
  <Carousel>
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
    <template #indicator="page">
      <CarouselIndicator :count="page.count" v-model="page.pageIndex" @update:modelValue="page.setPageIndex" style="justify-content: flex-start; padding-left: 20px;"></CarouselIndicator>
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