### 自定义分页器

:::demo

```vue
<template>
<Carousel>
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination="page">
      <div class="carousel-demo-pagination-wrapper">
        <div class="btn-page" @click="page.prevPage">
          <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#293040" fill-rule="nonzero" points="10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322 10.7071068 3.70710678 6.41421356 8"></polygon></g></svg>
        </div>
        <div class="btn-page" @click="page.nextPage">
          <svg width="18px" height="18px" viewBox="0 0 16 16" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" ><polygon fill="#293040" fill-rule="nonzero" transform="translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000)" points="11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322 11.7071068 3.70710678 7.41421356 8"></polygon></g></svg>
        </div>
      </div>
  </template>
</Carousel>
</template>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}

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