<template>
<div class="topheader flex-between">
  <div class="logo flex-start">
    <p class="img"><img :src="require('@/assets/imgs/logo.png')" alt=""></p>
    <p class="title">{{siteInfo.unit + siteInfo.desc}}</p>
  </div>
  <div class="user-center flex-end">
    <el-avatar icon="el-icon-user-solid" size="small" :src="avatarSrc"></el-avatar>
    <el-dropdown :show-timeout="0" @command="handleClickItem">
      <span class="username">{{userInfo.name}}<i class="arrow-icon el-icon-arrow-down"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="handleUpdateUserinfo">修改资料</el-dropdown-item>
        <el-dropdown-item command="handleResetPassword">修改密码</el-dropdown-item>
        <el-dropdown-item command="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <BaseDialog
    v-if="isShowDialog"
    :dialogConfig="dialogConfig"
    @handleCloseDialog="handleCloseDialog"
  >
    <editUserInfo  v-if="dialogWhich === 'edit'" @handleCloseDialog="handleCloseDialog" :row="$store.getters.userInfo"/>
    <resetPassword v-if="dialogWhich === 'resetPassword'" @handleCloseDialog="handleCloseDialog" :row="userInfo" />
  </BaseDialog>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseDialog from '@/components/BaseDialog'
import resetPassword from './resetPassword'
import editUserInfo from './editUserInfo'
export default {
  components: { BaseDialog, resetPassword, editUserInfo },
  computed: {
    ...mapGetters(['userInfo', 'siteInfo']),
    avatarSrc ({ userInfo }) {
      return process.env.VUE_APP_baseURL + userInfo.picUrl
    },
  },
  data () {
    return {
      isShowDialog: false,
      dialogConfig: {
        title: '',
        width: '30%',
      },
      dialogWhich: '',
      row: {},
    }
  },
  methods: {
    handleClickItem (command) {
      this[command]()
    },
    handleUpdateUserinfo () {
      this.isShowDialog = true
      this.dialogConfig.title = '修改资料'
      this.dialogWhich = 'edit'
    },
    handleLogout () {
      this.$store.commit('user/handleLogout')
      this.$router.replace({ path: '/login' })
    },
    handleResetPassword () {
      this.isShowDialog = true
      this.dialogConfig.title = '修改密码'
      this.dialogWhich = 'resetPassword'
    },
    handleCloseDialog () {
      this.isShowDialog = false
      this.dialogConfig.title = ''
      this.dialogWhich = ''
    },
  }
}
</script>

<style lang="scss" scoped>
.topheader{
  height: 100%;
  width: 100%;
  color: #fff;
  .logo{
    >.img img{
      width: 70%;
    }
    >.title{
      border-left: 1px solid #fff;
      padding-left: 20px;
      margin-left: 20px;
      font-size: 22px;
      font-weight: bold;
    }
  }
  .user-center{
    height: 100%;
  }
  .username{
    margin: 0 5px 0 10px;
    color: #fff;
    .arrow-icon{
      margin-left: 5px;
    }
  }
}
</style>
