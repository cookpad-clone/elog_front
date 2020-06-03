<template>
  <fragment>
    <elog-header />
    <main>
      <e-tab />
      <nuxt />
    </main>
    <notifications group="admin-noti" />
  </fragment>
</template>

<script>
import ElogHeader from '~/components/Header.vue'
import ETab from '~/components/Tab.vue'

export default {
  components: {
    ElogHeader,
    ETab
  }
}
</script>
<style>
main {
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1919px) {
  main {
    width: 1376px;
  }
}
@media (max-width: 1440px) {
  main {
    width: 1312px;
  }
}
@media (max-width: 1312px) {
  main {
    width: 912px;
  }
}
@media (max-width: 944px) {
  main {
    width: calc(100% - 2rem);
  }
}
@media (max-width: 767px) {
  main {
    width: calc(100% - 2rem);
  }
}
</style>
