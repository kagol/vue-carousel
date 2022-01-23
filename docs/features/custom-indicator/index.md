# 自定义指示器

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
    const indicatorArr = Array.from(new Array(3).keys())

    return { pageIndex, setPageIndex, indicatorArr }
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