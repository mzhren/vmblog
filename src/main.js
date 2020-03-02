// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueShowdown from 'vue-showdown'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faArchive, faFolder, faSearch, faArrowRight, faTags, faUser, faAngleDoubleRight, faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faFile,faFolderOpen,faClock,faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faArchive, faFolder, faSearch, faArrowRight, faTags, faUser, faClock, faFolderOpen, faAngleDoubleRight,faExternalLinkAlt, faArrowLeft,faFile,faCalendarAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


Vue.use(VueShowdown, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: true,
  },
})

// Vue.use(Paginate)

//Vue.component('paginate', Paginate)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
