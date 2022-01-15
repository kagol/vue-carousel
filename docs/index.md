# Carousel 走马灯

### 基本用法

:::demo `Carousel`组件提供了默认插槽，直接将元素放在`<DCarousel>`即可实现轮播效果。

```vue
<template>
  <DCarousel>

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

### 掘金活动

:::demo `<DCarousel>`元素里面可以放任意元素，比如放上两张图片就是掘金活动的效果。

```vue
<template>
  <DCarousel style="width: 470px; height: 280px;">
    <img
      src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4dda7abf534e098f04fe0e968b1e0c~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:940:560.awebp?"
      height="280"
    />
    <img
      src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5b0b404fcb44ac9fb1359334186b46~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:940:560.awebp?"
      height="280"
    />
  </DCarousel>
</template>
```

:::

### 指示器位置

:::demo `<DCarousel>`组件将其中的指示器子组件暴露出来，并提供了`indicator`插槽，因此可以随意调整`DCarouselIndicator`的位置，比如放在左下角。

```vue
<template>
  <DCarousel v-model="pageIndex">
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
    <template #indicator>
      <DCarouselIndicator :count="3" v-model="pageIndex" style="justify-content: flex-start; padding-left: 20px;"></DCarouselIndicator>
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
    return { pageIndex, setPageIndex }
  },
})
</script>
```

:::

### 自定义指示器

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
  background-color: rgb(135, 164, 186);
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

### 自定义分页器

:::demo

```vue
<template>
<DCarousel v-model="pageIndex">
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination>
    <DCarouselPagination>
      <div class="carousel-demo-pagination-wrapper">
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
    </DCarouselPagination>
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

    return {
      pageIndex,
      prevPage,
      nextPage,
    }
  }
})
</script>
<style>
.carousel-demo-pagination-wrapper {
  position: absolute;
  top: 20px;
  right: 8px;
}

.carousel-demo-pagination-wrapper .btn-page {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  border-radius: 8px;
  background-color: rgba(100,100,100,.1);
  cursor: pointer;
}

.carousel-demo-pagination-wrapper .btn-page:hover {
  background-color: rgba(100,100,100,.2);
}
</style>
```

:::

### 手风琴式折叠卡片

:::demo `DCarouselIndicator`指示器组件提供了默认插槽，可以单独使用它实现自定义指示器效果，比如手风琴式折叠卡片。

```vue
<template>
  <DCarouselIndicator style="position: static;">
    <template #default="pageInfo">
    <div class="box">
      <div :class="['panel', pageInfo.pageIndex === 1 ? 'active' : '']" @click="pageInfo.setPageIndex(1)">
        <h3>Explore The World</h3>
      </div>
      <div :class="['panel', pageInfo.pageIndex === 2 ? 'active' : '']" @click="pageInfo.setPageIndex(2)">
        <h3>Wild Forest</h3>
      </div>
      <div :class="['panel', pageInfo.pageIndex === 3 ? 'active' : '']" @click="pageInfo.setPageIndex(3)">
        <h3>Sunny Beach</h3>
      </div>
      <div :class="['panel', pageInfo.pageIndex === 4 ? 'active' : '']" @click="pageInfo.setPageIndex(4)">
        <h3>City on Winter</h3>
      </div>
      <div :class="['panel', pageInfo.pageIndex === 5 ? 'active' : '']" @click="pageInfo.setPageIndex(5)">
        <h3>Mountains - Clouds</h3>
      </div>
    </div>
    </template>
  </DCarouselIndicator>
</template>
<style>
.box {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  transition: all 700ms ease-in;
}
.panel:nth-child(1){
  background-image: url("https://picsum.photos/1350/900?random=1");
}
.panel:nth-child(2){
  background-image: url("https://picsum.photos/1350/900?random=2");
}
.panel:nth-child(3){
  background-image: url("https://picsum.photos/1350/900?random=3");
}
.panel:nth-child(4){
  background-image: url("https://picsum.photos/1350/900?random=4");
}
.panel:nth-child(5){
  background-image: url("https://picsum.photos/1350/900?random=5");
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
```

:::


### 华为

:::demo

```vue
<template>
<DCarousel v-model="pageIndex">
  <div>
    <div class="carousel-demo-basic">
      <img src="https://www-file.huawei.com/-/media/corp2020/home/banner/5/new-year-message-2022.jpg" />
      <div class="carousel-demo-basic-content">
        <h3>前行不辍，未来可期</h3>
        <p>华为轮值董事长郭平新年致辞</p>
        <a class="btn-more" href="/cn/special-release/new-year-message-2022?ic_medium=hwdc&amp;ic_source=corp_banner1_newyearmessage2022" onclick="ga('send', 'event', 'corp_hp_clicks', 'banner1', 'newyearmessage2022');" target="_blank" rel="noopener">了解更多</a>
      </div>
    </div>
  </div>
  <div><img src="https://www-file.huawei.com/-/media/corp2020/home/banner/5/vmall-new-year-p2-v2.jpg" /></div>
  <div><img src="https://www-file.huawei.com/-/media/corp2020/home/banner/5/p50-pocket-en.jpg" /></div>
  <template #indicator>
    <div class="carousel-demo-indicator-wrapper">
      <DCarouselIndicator v-model="pageIndex">
        <div class="carousel-demo-indicator-item-wrapper">
          <div :class="['carousel-demo-indicator-item', pageIndex === 1 && 'active']" @click="setPageIndex(1)"></div>
          <div :class="['carousel-demo-indicator-item', pageIndex === 2 && 'active']" @click="setPageIndex(2)"></div>
          <div :class="['carousel-demo-indicator-item', pageIndex === 3 && 'active']" @click="setPageIndex(3)"></div>
        </div>
      </DCarouselIndicator>
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
    const { pageIndex, setPageIndex } = usePage()
    return { pageIndex, setPageIndex }
  }
})
</script>
<style>
.carousel-demo-basic {
  position: relative;
}

.carousel-demo-basic .carousel-demo-basic-content {
  position: absolute;
  left: 15%;
  top: 23%;
}

.carousel-demo-basic-content h3 {
  font-size: 3em;
  color: #fff;
  text-shadow: 0 0 15px #444;
  margin-bottom: 10px;
}

.carousel-demo-basic-content p {
  font-size: 1.25em;
  color: #fff;
  margin-bottom: 2em;
  text-shadow: 0 0 15px #444;
}

.carousel-demo-basic-content a.btn-more {
  border: 1px solid #fff;
  text-align: center;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  font-size: 0.875em;
  position: unset;
  padding: 0 30px;
  min-width: 170px;
  height: 42px;
  line-height: 40px;
}

.carousel-demo-basic-content a.btn-more:hover {
  background-color: #c7000b;
  border-color: #c7000b;
  color: #fff;
}

.carousel-demo-indicator-wrapper {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel-demo-indicator-item-wrapper {
  display: flex;
}

.carousel-demo-indicator-item {
  width: 100px;
  height: 3px;
  margin: 0 8px;
  background: var(--devui-icon-fill, #d3d5d9);
  cursor: pointer;
}

.carousel-demo-indicator-item.active{
  background: #5e7ce0;
}
</style>
```

:::

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
    <DCarouselPagination>
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
    </DCarouselPagination>
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
