<template>
  <div class="dashboard-list">
    <card/>
    <card/>
    <card/>
    <card/>
  </div>
</template>

<script>
import auth from '~/middleware/auth'
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  middleware: [auth],
  mounted() {
    this.$notify({
      group: 'admin-noti',
      title: '등록 성공!',
      text: '새 포스트 등록에 성공했습니다.',
      duration: 2000,
      speed: 400
    })
  }
}
</script>
<style>
.dashboard-list {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
}
</style>
