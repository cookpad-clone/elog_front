<template>
  <fragment>
    <user-header/>
    <nuxt/>
  </fragment>
</template>
<script>
import UserHeader from '@/components/user/UserHeader'

export default {
  components: {
    UserHeader
  }
}
</script>
