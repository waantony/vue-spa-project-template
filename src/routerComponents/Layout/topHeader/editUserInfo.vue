<template>
<BaseForm
  :rules="rules"
  :formItemList="formItemList"
  :formConfig="formConfig"
  @handleCancel="handleCloseDialog"
  @handleSubmit="handleSubmit"
>
  <el-form-item
    label="修改头像"
    prop="imgList"
  >
    <BaseUpload
      :uploadConfig="uploadConfig"
      @handleUploadSuccess="handleUploadSuccess"
      @handleUploadRemove="handleUploadRemove"
    />
  </el-form-item>
</BaseForm>
</template>

<script>
import BaseForm from '@/components/BaseForm'
import { updateUser } from '@/api/user'
import BaseUpload from '@/components/BaseUpload'
import { sexStatus } from '@/utils/options'
import { requiredRule, mobileRule, usernameRule } from '@/utils/common'
export default {
  components: { BaseForm, BaseUpload },
  props: {
    row: {
      type: Object,
    }
  },
  data () {
    return {
      formConfig: {
        labelWidth: '8em',
      },
      rules: {
        username: [requiredRule, usernameRule],
        mobile: [requiredRule, mobileRule],
        name: [requiredRule],
      },
      picUrl: null,
    }
  },
  computed: {
    uploadConfig ({ row }) {
      const { picUrl } = row
      const fileList = [{ url: process.env.VUE_APP_baseURL + picUrl }]
      return {
        // fileList: [ // 需要数据回显时传入的图片列表数组
        //   // { name: 'food.jpg', url: 'http://xxx.jpg' }
        // ],
        fileList,
        action: '/api/user/uploadImg', // 上传头像服务器地址
        baseURL: process.env.VUE_APP_baseURL,
        headers: {
          Authorization: this.$store.getters.token
        },
        limit: 1, // 文件数量的限制
        // maxSize: 100, // 单文件接受的最大空间值，单位 KB
        // data: {}, // 上传时附带的额外参数
        accept: '.jpg,.jpeg,.png,.bmp,.gif', // 接受的文件类型，多类型用逗号分隔
      }
    },
    formItemList ({ row, roleOptions }) {
      return [
        {
          type: 'input', // 必填，表单类型
          inputType: 'text', // 可选，接受原生输入框类型，默认为 'text'
          label: '用户名', // 可选，表单标题
          prop: 'username', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: row.username, // 可选，初始值
          // maxlength: 20, // 可选，文本最大长度，默认为 64
        },
        {
          type: 'input', // 必填，表单类型
          inputType: 'text', // 可选，接受原生输入框类型，默认为 'text'
          label: '手机号', // 可选，表单标题
          prop: 'mobile', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: row.mobile, // 可选，初始值
          maxlength: 11, // 可选，文本最大长度，默认为 64
        },
        // {
        //   type: !row.userId && 'input', // 必填，表单类型
        //   inputType: 'password', // 可选，接受原生输入框类型，默认为 'text'
        //   label: '密码', // 可选，表单标题
        //   prop: 'password', // 必填，字段名
        //   placeholder: '请输入', // 可选，默认为 ''
        //   initValue: undefined, // 可选，初始值
        //   maxlength: 20, // 可选，文本最大长度，默认为 64
        // },
        {
          type: 'input', // 必填，表单类型
          inputType: 'text', // 可选，接受原生输入框类型，默认为 'text'
          label: '姓名', // 可选，表单标题
          prop: 'name', // 必填，字段名
          placeholder: '请输入', // 可选，默认为 ''
          initValue: row.name, // 可选，初始值
        },
        // {
        //   type: 'input', // 必填，表单类型
        //   inputType: 'text', // 可选，接受原生输入框类型，默认为 'text'
        //   label: '邮箱', // 可选，表单标题
        //   prop: 'email', // 必填，字段名
        //   placeholder: '请输入', // 可选，默认为 ''
        //   initValue: row.email, // 可选，初始值
        // },
        {
          type: 'radio', // 类型
          label: '性别', // 可选，表单标题
          prop: 'sex', // 必填，字段名
          initValue: row.sex, // 可选，初始值
          isButtonType: true,
          options: sexStatus
        },
      ]
    },
  },
  methods: {
    handleCloseDialog () {
      this.$emit('handleCloseDialog')
    },
    handleSubmit (formData) {
      const { picUrl } = this
      const reqData = {
        ...formData,
      }
      picUrl && (reqData['picUrl'] = picUrl)
      updateUser(reqData).then(res => {
        this.$message({
          type: 'success',
          message: `操作成功`,
        })
        this.handleCloseDialog()
        this.$store.dispatch('user/actionGetUserInfo')
      })
    },
    handleUploadSuccess (resData) {
      this.picUrl = resData
      // url_thum, url
      // const { url_thum: urlThum, url } = resData
      // this.uploadData.pics.push(url)
      // this.uploadData.thumPics.push(urlThum)
    },
    handleUploadRemove (i) {
      // this.uploadData.pics.splice(i, 1)
      // this.uploadData.thumPics.splice(i, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.page-temp{
  height: 100%;
  width: 100%;
}
</style>
