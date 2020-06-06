<template>
  <aside class="elog_navi">
    <div class="elog_menu">
      <section>
        <h4>공지사항</h4>
        <ul>
          <li v-for="(item, index) in noticeItem" :key="index">
            <h5>
              <nuxt-link to="/">
                {{ item.title }}
              </nuxt-link>
            </h5>
            <div>
              {{ item.content }}
            </div>
          </li>
        </ul>
      </section>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      noticeItem: [
        {
          title: '수식 입력 및 외부 서비스 개체 삽입 기능 업데이트',
          content: '2020년 3월 31일'
        }
      ]
    }
  }
}
</script>
<style>
.elog_navi {
  margin-left: 6rem;
  width: 16rem;
}
.elog_menu {
  display: block;
  position: fixed;
  top: 118px;
  width: 16rem;
}
</style>
