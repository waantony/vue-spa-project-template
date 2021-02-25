<template>
  <!-- router 属性：使用 vue-router 的模式，以 el-menu-item 的 index 作为 path 进行路由跳转 -->
  <el-menu
    mode="vertical"
    background-color="#354a5f"
    text-color="#f1f2f3"
    active-text-color="#ffd04b"
    :default-active="activePath"
    :router="true"
  >
    <template v-for="(route) in sideBarMenus">
      <MenusItem
        :key="route.path"
        :route="route"
      />
    </template>
  </el-menu>
</template>

<script>
import MenusItem from './MenusItem'
// import notControlledRoutes from '../../router/modules/notControlledRoutes'
// import { mapGetters } from 'vuex'
export default {
  components: { MenusItem },
  props: {
    // 侧边栏菜单列表
    sideBarMenus: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      // parents: [],
    }
  },
  computed: {
    // ...mapGetters(['accessRoutes', 'sideBar']),
    // routesList () {
    //   return [...notControlledRoutes, ...this.accessRoutes]
    // },
    // 根据当前路由地址计算出当前激活的菜单，用于激活回显
    // 如果不动态设置 default-active 属性，点击是正常的，但刷新后激活状态无法正确回显
    activePath ({ $route }) {
      return $route.path
    },
  },
  created () {
    // ...
  },
}
</script>
