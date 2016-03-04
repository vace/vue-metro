/*global Vue*/
/*global VueRouter*/

import installRouter from './router'
import Main from './main.vue'
import vueMetro from '../src/index'

import showCode from './page/docs/show-code.vue'

Object.keys(vueMetro).forEach(function(name){
	Vue.component(name,vueMetro[name])
})

Vue.component('show-code',showCode)

let router = new VueRouter()

installRouter(router)

router.start(Main, 'body')