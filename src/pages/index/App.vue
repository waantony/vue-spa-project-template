<template>
  <div id="app">
    Vue 多页应用，这是 index.html
  </div>
</template>

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
