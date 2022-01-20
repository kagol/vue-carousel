
### B站

:::demo

```vue
<template>
<DCarousel v-model="pageIndex" class="carousel-demo-bilibili">
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/40f0a4406ac09295.png' />
      <div class="carousel-mask" style="background-color: rgb(22, 29, 38);"></div>
      <div class="carousel-tool not-gray" data-gray="74" style="color:white;">
        <a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>谁是游戏区播放TOP1？</span></a></div>
    </div>
  </div>
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/5d3503df424141a1.jpg' />
      <div class="carousel-mask" style="background-color: rgb(83, 73, 57);"></div>
      <div class="carousel-tool not-gray" data-gray="74" style="color:white;"><a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>谁能拒绝可爱小狗呢？</span></a></div>
    </div>
  </div>
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/5ed9080ff718b46b.jpg' />
      <div class="carousel-mask" style="background-color: rgb(40, 36, 55);"></div>
      <div class="carousel-tool not-gray" data-gray="74" style="color:white;">
        <a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>守护解放西3热血归来！正义之魂，燃起来了！</span></a></div>
    </div>
  </div>
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/1e952454566546f3.png' />
      <div class="carousel-mask" style="background-color: rgb(61, 66, 63);"></div>
      <div class="carousel-tool not-gray" data-gray="74" style="color:white;">
        <a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>必听！TVB经典26首金曲回忆杀</span></a></div>
    </div>
  </div>
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/17420d5be0805551.png' />
      <div class="carousel-mask" style="background-color: rgb(77, 79, 74);"></div>
      <div class="carousel-tool not-gray" data-gray="77" style="color:white;"><a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>原神2.4：云堇唱给你听</span></a></div>
    </div>
  </div>
  <div>
    <div class="carousel-demo-item-bilibili">
      <img src = 'https://s3.bmp.ovh/imgs/2022/01/721ba44e91795ffb.png' />
      <div class="carousel-mask" style="background-color: rgb(213, 89, 57);"></div>
      <div class="carousel-tool not-gray" data-gray="122" style="color:white;"><a href="https://www.bilibili.com/blackboard/activity-gamereview2021.html" rel="noopener" target="_blank" data-target-url="https://www.bilibili.com/blackboard/activity-gamereview2021.html"><span>用视频的方式，记录新年！</span></a></div>
    </div>
  </div>
  <template #indicator>
    <div class="carousel-demo-bilibili-indicator-wrapper">
      <DCarouselIndicator v-model="pageIndex" style="justify-content: flex-start;">
        <div class="carousel-demo-bilibili-indicator-item-wrapper">
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 1 && 'active']" @click="setPageIndex(1)"></div>
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 2 && 'active']" @click="setPageIndex(2)"></div>
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 3 && 'active']" @click="setPageIndex(3)"></div>
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 4 && 'active']" @click="setPageIndex(4)"></div>
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 5 && 'active']" @click="setPageIndex(5)"></div>
          <div :class="['carousel-demo-bilibili-indicator-item', pageIndex === 6 && 'active']" @click="setPageIndex(6)"></div>
        </div>
      </DCarouselIndicator>
    </div>
  </template>
  <template #pagination>
      <div class="carousel-demo-bilibili-pagination-wrapper">
       <div class="btn-page" @click="prevPage">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 16 16"
            version="1.1"
          >
            <g

              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <polygon
          
                fill="#293040"
                fill-rule="nonzero"
                points="10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322 10.7071068 3.70710678 6.41421356 8"
              ></polygon>
            </g>
          </svg>
        </div>
        <div class="btn-page" @click="nextPage">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 16 16"
            version="1.1"
          >
            <g
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <polygon
                fill="#293040"
                fill-rule="nonzero"
                transform="translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) "
                points="11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322 11.7071068 3.70710678 7.41421356 8"
              ></polygon>
            </g>
          </svg>
        </div>
      </div>
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
    const { pageIndex, prevPage, nextPage, setPageIndex } = usePage(1)

    return {
      pageIndex,
      prevPage,
      nextPage,
      setPageIndex,
    }
  }
})
</script>
<style>
.carousel-demo-bilibili {
  width: 600px;
}

.carousel-demo-item-bilibili {
  position: relative;
}

.carousel-demo-item-bilibili .carousel-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  user-select: none;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(0,#2f3238 11%,transparent 20%);
}

.carousel-demo-item-bilibili .carousel-tool {
  position: absolute;
  margin-top: 0;
  flex-grow: 1;
  z-index: 2;
  transition: filter .3s cubic-bezier(.645,.045,.355,1);
  bottom: 60px;
  left: 15px;
  color: #fff;
}

.carousel-demo-item-bilibili .carousel-tool a {
  color: inherit;
  font-size: 18px;
}

.carousel-demo-item-bilibili .carousel-tool a:hover {
  text-decoration: none;
}

.carousel-demo-bilibili-indicator-wrapper {
  z-index: 1;
  position: absolute;
  bottom: 20px;
  padding-left: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.carousel-demo-bilibili-indicator-item {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 4px;
  border-radius: 50%;
  background-color: rgba(255,255,255,.4);
  overflow: hidden;
  cursor: pointer;
}

.carousel-demo-bilibili-indicator-item.active {
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  background-color: #fff;
}

.carousel-demo-bilibili-pagination-wrapper {
  position: absolute;
  bottom: 50px;
  right: 8px;
  z-index: 2;
}

.carousel-demo-bilibili-pagination-wrapper .btn-page {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  border-radius: 8px;
  background-color: rgba(255,255,255,.1);
  cursor: pointer;
  color: #fff;
}

.carousel-demo-bilibili-pagination-wrapper .btn-page:hover {
  background-color: rgba(255,255,255,.2);
}
</style>
```

:::