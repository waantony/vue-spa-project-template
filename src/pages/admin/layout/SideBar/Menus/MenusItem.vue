<template>
  <!-- 叶子菜单 -->
  <el-menu-item
    v-if="route.meta && route.meta.value"
    :index="indexPath"
    class="menu-item"
  >
    <i :class="route.meta && route.meta.icon" />
    <span>{{ route.meta && route.meta.title }}</span>
  </el-menu-item>

  <!-- 只有一个叶子菜单，直接显示叶子菜单 -->
  <el-menu-item
    v-else-if="!route.meta"
    :index="indexPath"
    class="menu-item"
  >
    <i :class="route.children[0].meta && route.children[0].meta.icon" />
    <span>{{ route.children[0].meta && route.children[0].meta.title }}</span>
  </el-menu-item>

  <!-- 有子菜单 -->
  <el-submenu
    v-else-if="route.children.length > 0"
    :index="indexPath"
    class="menu-item"
  >
    <template slot="title">
      <i :class="route.meta.icon" />
      <span>{{ route.meta.title }}</span>
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
    route: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    parentPath: {
      type: String,
      required: true,
    },
  },
  computed: {
    indexPath ({ parentPath, route }) {
      const prevPath = /\/$/.test(parentPath) ? parentPath.substring(0, -1) : parentPath
      const nowPath = /^\//.test(route.path) ? route.path.substring(1) : route.path
      return `${prevPath}/${nowPath}`
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
