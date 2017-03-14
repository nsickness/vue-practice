
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial);

Vue.config.productionTip = false;

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'orange',
  background: 'white'
})

new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
