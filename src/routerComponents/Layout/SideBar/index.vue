<template>
  <div class="side-bar flex-col-start-stretch">
    <Logo class="logo" />
    <Menus class="menus" :sideBarMenus="$attrs.sideBarMenus" />
  </div>
</template>

<script>
import Logo from './Logo'
import Menus from './Menus'
export default {
  components: {
    Logo,
    Menus,
  },
  inheritAttrs: false,
}
</script>

<style lang="scss">
.side-bar {
  height: 100%;
  .logo {
    flex: 0 0 50px;
    background: #c3d0e1;
  }
  .menus {
    flex: 1;
    border: 0;
  }
}
</style>
