<template>
  <v-layout column justify-center align-center>
    Hello world
  </v-layout>
</template>

<script>
import auth from '~/middleware/auth'

export default {
  middleware: [auth]
}
</script>
