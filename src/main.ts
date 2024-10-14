import { createSSRApp } from 'vue'
import App from './App.vue'
import i18n from './locale'
import pinia from './stores'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(i18n)
  return {
    app,
  }
}
