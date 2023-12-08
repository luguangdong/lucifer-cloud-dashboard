import { defineStore, createPinia } from 'pinia'
import { GlobalState } from './interface'
export const GlobalStore = defineStore({
    id: 'GlobalState',
    state: (): GlobalState =>({
      state: '',//state
      code: '',//code
      token: '',//token
      userInfo: '',//user
    }),
    getters: {

    },
    actions: {
      setState(state: string) {
         this.state = state;
      },
      setCode(code: string) {
        this.code = code;
      },
      setToken(token: string) {
        this.token = token;
      },
      setUserInfo(userInfo: any) {
        this.userInfo = userInfo;
      },
    },
    persist: {
      enabled: true , // 这个配置代表存储生效，而且是整个store都存储
    }
});
const pinia = createPinia();

export default pinia;