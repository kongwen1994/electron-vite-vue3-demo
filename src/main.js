import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import utils from './utils/utils'
import router from './router'

const vue = createApp(App)
vue.use(router)
vue.config.globalProperties.$request = utils.request
vue.mount('#app')
