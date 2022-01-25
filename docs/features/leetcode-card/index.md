# LeetCode

### 首页轮播

:::demo `DCarousel`和`DCarouselIndicator`组合使用，可以很方便地实现 LeetCode 的卡片轮播效果。

```vue
<template>
  <DCarousel class="leetcode-carousel-card">
    <img width="258" src="https://pic.leetcode-cn.com/1643099306-QbeuFS-%E9%A6%96%E9%A1%B5%E5%8F%B3%E8%BE%B9%E6%A0%8F.png" />
    <img width="258" src="https://pic.leetcode-cn.com/1617250539-zSvRFh-%E6%95%99%E8%82%B2%E4%BC%98%E6%83%A0-01.png" />
    <img width="258" src="https://pic.leetcode-cn.com/1636622575-frBHFI-Android%20%E5%BC%80%E5%8F%91%E9%9D%A2%E8%AF%95%E7%AA%81%E5%87%BB.jpg" />
    <template #pagination></template>
    <template #indicator="page">
      <DCarouselIndicator>
        <div v-for="item of Array.from(new Array(3).keys())" :class="['leetcode-indicator-item', page.pageIndex === item && 'active']" @click="page.setPageIndex(item)"></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<style lang="scss">
.leetcode-carousel-card {
  width: 258px;
  border-radius: 8px;

  &:hover .devui-carousel-indicator {
    transform: scale(1.6);
  }

  .devui-carousel-indicator {
    transition: all 0.3s ease 0s;
  }

  .leetcode-indicator-item {
    margin: 0 4px;
    opacity: 1;
    width: 6px;
    height: 6px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px, rgba(0, 0, 0, 0.1) 0px 2px 4px;
    background: rgba(60, 60, 67, 0.3);
    cursor: pointer;
    border-radius: 100%;

    &.active {
      opacity: 1;
      background: rgba(38, 38, 38, 0.75);
    }
  }
}
</style>
```

:::

### 求职页轮播

:::demo

```vue
<template>
  <DCarousel class="leetcode-carousel-card-company">
    <img width="490" src="https://pic.leetcode-cn.com/1629254287-yEsnNQ-%E5%A0%86.jpg" />
    <img width="490" src="https://pic.leetcode-cn.com/1601206854-mLrzfT-%E9%9D%A2%E8%AF%95%E9%A1%B5.png" />
    <img width="490" src="https://pic.leetcode-cn.com/1604894953-QAaYoJ-%E7%AE%97%E6%B3%95%E4%B8%8E%E9%9D%A2%E8%AF%95%E6%8A%80%E5%B7%A7%E7%B2%BE%E8%AE%B2.png" />
    <template #pagination></template>
    <template #indicator="page">
      <DCarouselIndicator>
        <div v-for="item of Array.from(new Array(3).keys())" :class="['leetcode-indicator-item', page.pageIndex === item && 'active']" @click="page.setPageIndex(item)"></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<style lang="scss">
.leetcode-carousel-card-company {
  width: 490px;
  border-radius: 8px;

  &:hover .devui-carousel-indicator {
    transform: scale(1.6);
  }

  .devui-carousel-indicator {
    transition: all 0.3s ease 0s;
  }

  .leetcode-indicator-item {
    margin: 0 4px;
    opacity: 1;
    width: 6px;
    height: 6px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px, rgba(0, 0, 0, 0.1) 0px 2px 4px;
    background: rgba(60, 60, 67, 0.3);
    cursor: pointer;
    border-radius: 100%;

    &.active {
      opacity: 1;
      background: rgba(38, 38, 38, 0.75);
    }
  }
}
</style>
```

:::

### 题库页

:::demo

```vue
<template>
<div style="width: 858px;">
  <div class="carousel-problemset-title">
    <h3>学习计划</h3>
    <div class="leetcode-pagination-wrapper">
      <div class="btn-page prev" @click="prevPage">
        <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#293040" fill-rule="nonzero" points="10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322 10.7071068 3.70710678 6.41421356 8"></polygon></g></svg>
      </div>
      <div class="btn-page" @click="nextPage">
        <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#293040" fill-rule="nonzero" transform="translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000)" points="11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322 11.7071068 3.70710678 7.41421356 8"></polygon></g></svg>
      </div>
    </div>
  </div>
  <DCarousel v-model="pageIndex" :autoplay="false" class="leetcode-carousel-card-problemset">
    <div class="carousel-item-problemset">
      <a href="https://leetcode-cn.com/study-plan/algorithms/" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1627640862-HgXcTO-Frame%201444.jpg" />
          <span>20 天「算法」刷题计划</span>  
        </div>
      </a>
      <a href="https://leetcode-cn.com/study-plan/data-structures/" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1627640875-pWplzE-Frame%201438.jpg" />
          <span>3 周攻克「数据结构」</span>  
        </div>
      </a>
      <a href="https://leetcode-cn.com/study-plan/dynamic-programming/" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1627640885-gGeALM-Frame%201437.jpg" />
          <span>「动态规划」刷题指南</span>  
        </div>
      </a>
      <a href="https://leetcode-cn.com/study-plan/lcof/" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1628144140-BatkPp-Frame%201485%20(1).jpg" />
          <span>剑指 Offer</span>  
        </div>
      </a>
      <a href="https://leetcode-cn.com/problem-list/xb9lfcwi" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1627641009-euIQrq-Frame%201486%20(1).jpg" />
          <span>程序员面试金典</span>  
        </div>
      </a>
    </div>
    <div class="carousel-item-problemset">
      <a href="https://leetcode-cn.com/study-plan/efficient-winning" target="_blank">
        <div class="carousel-subitem">
          <img src="https://pic.leetcode-cn.com/1627640897-cwxoTM-%E9%AB%98%E6%95%88%E5%88%B6%E8%83%9C%E5%B0%81%E9%9D%A2.jpg" />
          <span>面试高效通关计划</span>  
        </div>
      </a>
    </div>
    <template #indicator></template>
    <template #pagination></template>
  </DCarousel>
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  setup() {
    const { usePage } = getCurrentInstance().appContext.config.globalProperties
    const { pageIndex, prevPage, nextPage } = usePage(1)

    return {
      pageIndex, prevPage, nextPage
    }
  }
})
</script>
<style lang="scss">
.leetcode-carousel-card-problemset {

  .carousel-subitem {
    width: 152.4px;
    margin-right: 24px;
    text-align: center;
    cursor: pointer;

    &:nth-child(5) {
      margin-right: 0;
    }

    img {
      border-radius: 13px;
    }

    span {
      display: inline-block;
      text-align: center;
      font-size: 14px;
    }
  }
}

.carousel-item-problemset {
  display: flex;
  
  a {
    color: rgba(33,40,53);
  }
}

.carousel-problemset-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  h3 {
    margin-top: 0;
    font-size: 18px;
    color: rgba(33,40,53,.75);
  }
}

.leetcode-pagination-wrapper {
  .btn-page {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background-color: rgba(0,10,32,.03);
    cursor: pointer;
    color: #fff;

    &:hover {
      background-color: rgba(0,10,32,.05);
    }

    &.prev {
      margin-right: 8px;
    }
  }
}
</style>
```

:::

<!-- ### 学习页

:::demo 设置`type="card"`可以实现卡片化的效果（待实现）

```vue
<template>
  <DCarousel type="card" class="leetcode-carousel-card-leetbook">
    <img width="828" src="https://pic.leetcode-cn.com/1635315788-FMZNev-iOS%20%E5%BC%80%E5%8F%91%E9%9D%A2%E8%AF%95%E7%AA%81%E5%87%BB.jpg" />
    <img width="828" src="https://pic.leetcode-cn.com/1635315493-QWhXEq-%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9F%A5%E8%AF%86%E6%89%8B%E5%86%8C-%E5%AD%A6%E4%B9%A0.jpg" />
    <img width="828" src="https://pic.leetcode-cn.com/1613619790-YfhVOU-%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.jpg" />
    <template #pagination></template>
    <template #indicator="page">
      <DCarouselIndicator>
        <div v-for="item of Array.from(new Array(3).keys())" :class="['leetcode-indicator-item', page.pageIndex === item && 'active']" @click="page.setPageIndex(item)"></div>
      </DCarouselIndicator>
    </template>
  </DCarousel>
</template>
<style lang="scss">
.leetcode-carousel-card-leetbook {
  width: 828px;
  border-radius: 13px;

  &:hover .devui-carousel-indicator {
    transform: scale(1.6);
  }

  .devui-carousel-indicator {
    transition: all 0.3s ease 0s;
  }

  .leetcode-indicator-item {
    margin: 0 4px;
    opacity: 1;
    width: 6px;
    height: 6px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px, rgba(0, 0, 0, 0.1) 0px 2px 4px;
    background: rgba(60, 60, 67, 0.3);
    cursor: pointer;
    border-radius: 100%;

    &.active {
      opacity: 1;
      background: rgba(38, 38, 38, 0.75);
    }
  }
}
</style>
```

::: -->
