// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'

import  Xheader from './components/Xheader.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:`
  	<router-view />
  `
,
  components: { App , Xheader}
})
