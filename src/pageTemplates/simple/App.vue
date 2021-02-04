<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from './views/home'
export default {
  components: {
    home,
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100%;
  min-height: 100%;
  // 路由级别的根元素
  > div[class^="view-"] {
    height: 100%;
    min-height: 100%;
  }
}
</style>
