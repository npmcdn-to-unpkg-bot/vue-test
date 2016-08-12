import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routerMap from './router'

Vue.use(VueRouter)
Vue.use(VueResource)

require('./assets/rest.scss')

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.xhr = {withCredentials: true}

const router = new VueRouter()

router.afterEach(function (transition) {
    console.log('come in')
})

router.beforeEach(function (transition) {
    transition.next()
})

let app = Vue.extend()

routerMap(router)

router.start(app, '#evian')
