<template>
  <div class="view-viewName">
    <van-image-preview
      ref="instance"
      :value="isShow"
      :images="images"
      :max-zoom="8"
      :show-index="false"
      get-container="body"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true,
      images: ['https://lsmsmp-1252100135.file.myqcloud.com/uploads/20201126/1639475b23f31acc8f4bfd255180062f.jpg'],
    }
  },
}
</script>

<style lang="scss" scoped>
.view-viewName {
  font-size: 16px;
}
/deep/ .van-image-preview__image {
  width: 100%;
  height: 100%;
  img {
    object-fit: cover !important;
  }
}
</style>
