/* node:true */

require('./transition/index.js')

//base
import icon from './base/icon.vue'
import dropdown from './base/dropdown.vue'

//menus
import menus from './menus/index'

// controls
import accordion from './controls/accordion.vue'
import panel from './controls/panel.vue'
import tabs from './controls/tabs.vue'
import tab from './controls/tab.vue'

//information
import window from './information/window.vue'


//visualization
import panels from './visualization/panels.vue'




let vueMetro = {
	// base
	icon,
	dropdown,

	// controls
	accordion,
	panel,
	tabs,
	tab,

	//information
	window,

	//visualization
	panels
}


function addExports(components){
	Object.keys(components).forEach((name)=>{
		vueMetro[name] = components[name]
	})
}

addExports(menus);


module.exports = vueMetro