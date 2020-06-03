declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import { NotificationOptions } from 'vue-notification'

  interface Vue {
    $notify: (options: NotificationOptions | string) => void;
  }

  interface VueConstructor {
    notify: (options: NotificationOptions | string) => void;
  }
}
