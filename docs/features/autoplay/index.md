# 自动播放

:::demo `autoplay`可以设置是否需要自动播放，默认值为`true`，默认每隔3000毫秒切换一次，可以通过设置`interval`自定义自动播放的间隔时间。

```vue
<template>
  <button @click="play">{{text}}</button>
  <br><br>
  <DCarousel :autoplay="autoplay" :interval="1000">
    <div class="carousel-item">page 1</div>
    <div class="carousel-item">page 2</div>
    <div class="carousel-item">page 3</div>
  </DCarousel>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const defaultText = 'Play'
    const autoplay = ref(false)
    const text = ref(defaultText)

    const play = () => {
      autoplay.value = !autoplay.value
      text.value = autoplay.value ? 'Stop' : defaultText
    }

    return {
      autoplay, text, play
    }
  }
}
</script>
<style>
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
```

:::
