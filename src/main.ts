import { createApp } from 'vue'
import App from '/@/App.vue'
import router from '/@/router'
import { store, key } from '/@/store'

import 'virtual:windi.css'
import '/@/styles/main.css'

const app = createApp(App)

app.config.globalProperties.nightNightSix = 996

app.use(router)
app.use(store, key)
app.mount('#app')
