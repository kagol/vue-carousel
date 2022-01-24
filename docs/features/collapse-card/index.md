### 手风琴式折叠卡片

:::demo `DCarouselIndicator`指示器组件提供了默认插槽，可以单独使用它实现自定义指示器效果，比如手风琴式折叠卡片。

```vue
<template>
  <DCarouselIndicator>
    <template #default="page">
    <div class="box">
      <div :class="['panel', page.pageIndex === 1 ? 'active' : '']" @click="page.setPageIndex(1)">
        <h3>Explore The World</h3>
      </div>
      <div :class="['panel', page.pageIndex === 2 ? 'active' : '']" @click="page.setPageIndex(2)">
        <h3>Wild Forest</h3>
      </div>
      <div :class="['panel', page.pageIndex === 3 ? 'active' : '']" @click="page.setPageIndex(3)">
        <h3>Sunny Beach</h3>
      </div>
      <div :class="['panel', page.pageIndex === 4 ? 'active' : '']" @click="page.setPageIndex(4)">
        <h3>City on Winter</h3>
      </div>
      <div :class="['panel', page.pageIndex === 5 ? 'active' : '']" @click="page.setPageIndex(5)">
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