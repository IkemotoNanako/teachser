import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
Vue.config.productionTip = false
Vue.use(VueScrollTo)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
new Vue ({
  el: '#app', 
  data: {
    active: false,
    navi: false,
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    }
  }
})
