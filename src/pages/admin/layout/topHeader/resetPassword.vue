<template>
<BaseForm
  :rules="rules"
  :formItemList="formItemList"
  :formConfig="formConfig"
  @handleCancel="handleCancel"
  @handleSubmit="handleSubmit"
>
</BaseForm>
</template>

<script>
import BaseForm from '@/components/BaseForm'
import { resetPassword } from '@/api/user'
import { requiredRule, passwordRule } from '@/utils/common'
export default {
  components: { BaseForm },
  props: {
    isShowDialog: {
      type: Boolean,
      default: true,
    },
    row: {
      type: Object,
      default: () => ({})
    },
  },
  data () {
    return {
      rules: {
        pwdOld: [
          requiredRule, passwordRule,
        ],
        pwdNew: [
          requiredRule, passwordRule,
        ],
        pwdConfirm: [
          requiredRule, passwordRule,
        ],
      },
      formConfig: {
        labelWidth: '8em',
      },
    }
  },
  computed: {
    formItemList ({ row }) {
      return [
        {
          type: 'input', // 必填，表单类型
          inputType: 'password', // 可选，接受原生输入框类型，默认为 'text'
          label: '原密码', // 可选，表单标题
          prop: 'pwdOld', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: '', // 可选，初始值
          maxlength: 32, // 可选，文本最大长度，默认为 64
        },
        {
          type: 'input', // 必填，表单类型
          inputType: 'password', // 可选，接受原生输入框类型，默认为 'text'
          label: '新密码', // 可选，表单标题
          prop: 'pwdNew', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: '', // 可选，初始值
          maxlength: 32, // 可选，文本最大长度，默认为 64
        },
        {
          type: 'input', // 必填，表单类型
          inputType: 'password', // 可选，接受原生输入框类型，默认为 'text'
          label: '确认新密码', // 可选，表单标题
          prop: 'pwdConfirm', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: '', // 可选，初始值
          maxlength: 32, // 可选，文本最大长度，默认为 64
        },
      ]
    },
  },
  methods: {
    handleCloseDialog (done) {
      this.$emit('handleCloseDialog')
    },
    handleCancel () {
      this.handleCloseDialog()
    },
    handleLogout () {
      this.$store.commit('user/handleLogout')
      this.$router.push({ path: '/login' })
    },
    handleSubmit (formData) {
      const { pwdOld, pwdNew, pwdConfirm } = formData
      if (pwdNew !== pwdConfirm) {
        this.$message({
          type: 'error',
          message: `两次输入的新密码不一致`,
        })
        return
      }
      const reqData = {
        pwdOld,
        pwdNew,
      }
      resetPassword(reqData).then(res => {
        this.$message({
          type: 'success',
          message: `操作成功`,
        })
        this.handleLogout()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.base-dialog{
  padding: 0 5em;
}
</style>
