<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

const features = [
  {
    "thumbnail": "https://i.ytimg.com/vi/YzsTdLIcbzU/hqdefault.jpg"
  },
  {
    "thumbnail": "https://i.ytimg.com/vi/s_nc1IVoMxc/hqdefault.jpg"
  },
  {
    "thumbnail": "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg"
  },
  {
    "thumbnail": "https://i.ytimg.com/vi/pjyN3rOhJl4/hqdefault.jpg"
  }
]
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Carousel>
      <div class="carousel-item">item 1</div>
      <div class="carousel-item">item 2</div>
      <div v-for="item in features" class="carousel-item">{{ item.thumbnail }}</div>
    </Carousel>
 
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.carousel-item {
  text-align: center;
  line-height: 200px;
  background: #f3f6f8;
}
</style>
