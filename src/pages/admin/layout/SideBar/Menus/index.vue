<template>
  <!-- router 属性：使用 vue-router 的模式，以 el-menu-item 的 index 作为 path 进行路由跳转 -->
  <el-menu
    class="menus"
    mode="vertical"
    background-color="#354a5f"
    text-color="#f1f2f3"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location" />
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document" />
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting" />
      <span slot="title">导航四</span>
    </el-menu-item>
    <!-- <template v-for="(route) in routesList">
      <MenusItem :key="route.path" :route="route" :parentPath="''" />
    </template> -->
  </el-menu>
</template>

<script>
// import MenusItem from './MenusItem'
// import noPermissionRoutes from '../../router/modules/noPermissionRoutes'
// import { mapGetters } from 'vuex'
export default {
  // components: { MenusItem },
  data () {
    return {
      // parents: [],
    }
  },
  computed: {
    // ...mapGetters(['accessRoutes', 'sideBar']),
    // routesList () {
    //   return [...noPermissionRoutes, ...this.accessRoutes]
    // },
    // defaultActive ({ $route }) {
    //   const nowPath = $route.path
    //   if (nowPath !== '/' && /\/$/.test(nowPath)) {
    //     return nowPath.substring(0, nowPath.length - 1)
    //   }
    //   return nowPath
    // },
  },
}
</script>

<style lang="scss" scoped>
.menus {
  // border: 0;
  // &:not(.el-menu--collapse) {
  //   width: 220px;
  // }
}
</style>
