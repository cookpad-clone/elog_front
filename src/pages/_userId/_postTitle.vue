<template>
  <div>
    <div v-html="msg"/>
  </div>
</template>
<script>
import { markdownToHtml } from '~/service'

export default {
  layout: 'user',

  mounted() {
    let str = '# 안녕?'
    this.msg = markdownToHtml(str)
    this.$refs.msg
  },

  data() {
    return {
      msg: ''
    }
  }
}
</script>
