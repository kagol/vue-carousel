### 自定义分页器

:::demo

```vue
<template>
<DCarousel v-model="pageIndex">
  <div class="carousel-item">page 1</div>
  <div class="carousel-item">page 2</div>
  <div class="carousel-item">page 3</div>
  <template #pagination>
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