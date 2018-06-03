// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solids from '@fortawesome/fontawesome-free-solid'
// import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
// import faMale from '@fortawesome/fontawesome-free-solid/faMale'
// import faFemale from '@fortawesome/fontawesome-free-solid/faFemale'

fontawesome.library.add(brands, solids)

import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  created() {
  	this.$store.dispatch('init')
  }
})
