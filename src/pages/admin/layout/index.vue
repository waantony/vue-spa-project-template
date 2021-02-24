<template>
  <el-container class="layout">
    <!-- 左侧：侧边栏 -->
    <el-aside>
      <SideBar />
    </el-aside>
    <!-- 右侧：头尾 + 主体 -->
    <el-container>
      <el-header>Header</el-header>
      <!-- 主要视图区域 -->
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
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
}
</script>

<style lang="scss">
.layout {
  align-items: stretch;
  height: 100%;
  .el-header,
  .el-footer {
    height: 60px;
    background-color: #B3C0D1;
  }
  .el-aside {
    background-color: #D3DCE6;
    width: 300px;
  }
  .el-main {
    background-color: #E9EEF3;
  }
}
</style>
