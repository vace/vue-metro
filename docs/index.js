/*global Vue*/
/*global VueRouter*/

import installRouter from './router'
import Main from './main.vue'
import vueMetro from 'src/index'


Object.keys(vueMetro).forEach(function(name){
	Vue.component(name,vueMetro[name])
})

let router = new VueRouter()

installRouter(router)

router.start(Main, 'body')