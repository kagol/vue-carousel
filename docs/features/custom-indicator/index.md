# 自定义指示器

如果`Carousel`内置的`CarouselIndicator`指示器不满足你的要求，还可以定制自己的指示器。

:::demo

```vue
<template>
  <DCarousel>
    <div class="carousel-item-dark">page 1</div>
    <div class="carousel-item-dark">page 2</div>
    <div class="carousel-item-dark">page 3</div>
    <template #indicator="page">
      <DCarouselIndicator :count="page.count" v-model="page.pageIndex" style="justify-content: flex-start; padding-left: 20px;">
        <div
          :class="['carousel-indicator-item', page.pageIndex === item+1 ? 'active' : '']"
          v-for="item of indicatorArr"
          :key="item"
          @click="page.setPageIndex(item+1)"
        ></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const indicatorArr = Array.from(new Array(3).keys())

    return { indicatorArr }
  },
})
</script>
<style>
.carousel-item-dark {
  text-align: center;
  line-height: 200px;
  background: rgb(135, 164, 186);
  color: #fff;
}

.carousel-indicator-item {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: var(--xui-icon-fill, #d3d5d9);
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