import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '/@/App.vue'
import router from '/@/router'

import 'virtual:windi.css'
import '/@/styles/main.css'

const app = createApp(App)

app.config.globalProperties.nightNightSix = 996

app.use(router)
app.use(createPinia())
app.mount('#app')
