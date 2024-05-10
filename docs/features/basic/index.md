# 基本用法


`Carousel`组件提供了默认插槽，直接将元素放在`<Carousel>`即可实现轮播效果。

:::demo


```vue
<template>
  <Carousel>
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
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
