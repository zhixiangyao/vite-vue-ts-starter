import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '/@/styles/global.css'
import App from '/@/App.vue'

import router from '/@/router'

const app = createApp(App)

app.config.globalProperties.nightNightSix = 996

app.use(router)
app.use(createPinia())
app.mount('#app')
