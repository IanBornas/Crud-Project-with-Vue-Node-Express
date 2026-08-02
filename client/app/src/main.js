import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import "flyonui/flyonui"
import './styles/index.css'


createApp(App).use(router).mount('#app')
