import { Middleware } from '@nuxt/types'

const auth: Middleware = (context) => {
  console.log('hello?')
}

export default auth
