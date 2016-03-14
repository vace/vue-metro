/*global Vue*/
/*global VueRouter*/

import installRouter from './router'
import Main from './main.vue'
import vueMetro from '../src/index'

import docs from './page/docs/'

Object.keys(vueMetro).forEach(function(name){
	Vue.component(name,vueMetro[name])
})
Object.keys(docs).forEach(function(name){
	Vue.component(name,docs[name])
})

let router = new VueRouter()

installRouter(router)

router.start(Main, 'body')