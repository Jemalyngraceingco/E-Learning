import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/css/style.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/assets/lib/animate/animate.min.css';
import '@/assets/css/animate.css';
import '@/assets/css/carousel.css';










loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
