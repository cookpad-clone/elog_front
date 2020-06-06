<template>
  <fragment>
    <elog-header />
    <div class="content">
      <e-tab />
      <div class="dashboard">
        <main class="main-content">
          <nuxt />
        </main>
        <e-side-menu/>
        <!--        <e-navigation/>-->
      </div>
    </div>
    <notifications group="admin-noti" />
  </fragment>
</template>

<script>
import ElogHeader from '~/components/Header.vue'
import ETab from '~/components/Tab.vue'
import ENavigation from '~/components/Navigation.vue'
import ESideMenu from '~/components/SideMenu.vue'

export default {
  components: {
    ElogHeader,
    ETab,
    ENavigation,
    ESideMenu
  }
}
</script>
<style>
.content {
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1919px) {
  .content {
    width: 1376px;
  }
}
@media (max-width: 1440px) {
  .content {
    width: 1312px;
  }
}
@media (max-width: 1312px) {
  .content {
    width: 912px;
  }
}
@media (max-width: 944px) {
  .content {
    width: calc(100% - 2rem);
  }
}
@media (max-width: 767px) {
  .content {
    width: calc(100% - 2rem);
  }
}
.dashboard {
  display: flex;
  margin-top: 2rem;
}

.main-content {
  flex: 1 1 0;
}
</style>
