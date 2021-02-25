<template>
  <el-container class="layout">
    <!-- 左侧：侧边栏 -->
    <el-aside width="260px">
      <SideBar :sideBarMenus="sideBarMenus" />
    </el-aside>
    <!-- 右侧：头尾 + 主体 -->
    <el-container>
      <el-header height="50px">Header</el-header>
      <!-- 主要视图区域 -->
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="50px">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar'
// import topHeader from './topHeader'
export default {
  components: {
    SideBar,
    // topHeader,
  },
  inheritAttrs: false,
  props: {
    sideBarMenus: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.layout {
  align-items: stretch;
  height: 100%;
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
  }
  .el-aside {
    background-color: #D3DCE6;
  }
  .el-main {
    background-color: #E9EEF3;
  }
}
</style>
