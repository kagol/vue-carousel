### 华为

:::demo

```vue
<template>
<DCarousel>
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
  <template #indicator="page">
    <div class="carousel-demo-indicator-wrapper">
      <DCarouselIndicator>
        <div class="carousel-demo-indicator-item-wrapper">
          <div :class="['carousel-demo-indicator-item', page.pageIndex === 1 && 'active']" @click="page.setPageIndex(1)"></div>
          <div :class="['carousel-demo-indicator-item', page.pageIndex === 2 && 'active']" @click="page.setPageIndex(2)"></div>
          <div :class="['carousel-demo-indicator-item', page.pageIndex === 3 && 'active']" @click="page.setPageIndex(3)"></div>
        </div>
      </DCarouselIndicator>
    </div>
  </template>
</DCarousel>
</template>
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