import { AxiosInstance } from 'axios'

declare module 'Vue/types/vue' {
  interface Vue {
    $request: AxiosInstance,
  }
}
