import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueResizeText from "vue3-resize-text"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('ResizeText', VueResizeText.ResizeText);

app.mount('#app')
