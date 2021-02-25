<template>
  <!-- 路由 -->
  <el-menu-item
    v-if="!route.children || !route.children.length"
    :index="indexPath"
  >
    <i :class="route.meta && route.meta.icon" />
    <span>{{ route.meta && route.meta.title }}</span>
  </el-menu-item>

  <!-- 有子菜单 -->
  <el-submenu
    v-else-if="route.children && route.children.length"
    :index="indexPath"
  >
    <template slot="title">
      <i :class="route.meta && route.meta.icon" />
      <span>{{ route.meta && route.meta.title }}</span>
    </template>
    <template v-for="(child) in route.children">
      <MenusItem :key="child.path" :route="child" :parentPath="indexPath" />
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'MenusItem',
  props: {
    // 当前路由对象
    route: {
      type: Object,
      required: true,
    },
    // 嵌套菜单的上级路径，递归渲染时传给子菜单
    parentPath: {
      type: String,
      default: '',
    },
  },
  computed: {
    // 计算当前层级的路由的完整路径
    indexPath ({ parentPath, route: { path } }) {
      // 如果当前 route.path 是以 '/' 开头，则此路径就是根路径，无需添加父级路径
      if (/^\//.test(path)) {
        return path
      }
      // 如果 parentPath 以 '/' 结尾，移除结尾的 '/'
      if (/.+\/$/.test(parentPath)) {
        parentPath = parentPath.slice(0, -1)
      }
      return `${parentPath}/${path}`
    },
  },
}
</script>
