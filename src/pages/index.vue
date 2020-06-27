<template>
  <div class="dashboard-list">
    <card v-for="(card, index) in cardData"
          :key="index"
          :title="card.title"
          :img-url="card.imgUrl"
          :content="card.content"
          :register-user="card.registerUser"
          :register-user-img-url="card.registerUserImgUrl"
          :cnt-comment="card.cntComment"
          :cnt-like="card.cntLike"
          :cdt="card.cdt"
    />
  </div>
</template>

<script lang="js">
import auth from '~/middleware/auth'
import Card from '~/components/Card'
import { createFakeCardData } from '~/service/fake'

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
  },
  data() {
    return {
      cardData: createFakeCardData(10)
    }
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
