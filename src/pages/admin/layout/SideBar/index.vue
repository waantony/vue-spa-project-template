<template>
  <div class="side-bar flex-col-start-stretch">
    <Menus class="menus" />
  </div>
</template>

<script>
import Menus from './Menus'
export default {
  components: {
    Menus,
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  > .menus {
    flex: 1;
  }
}
</style>
