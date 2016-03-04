/* node:true */

require('./transition/index.js')

import icon from './base/icon.vue'

// controls
import accordion from './controls/accordion.vue'
import panel from './controls/panel.vue'


//information
import window from './information/window.vue'


//visualization
import panels from './visualization/panels.vue'

const vueMetro = {
	icon,
	accordion,
	panel,


	window,


	panels
}

module.exports = vueMetro