import page from './page/'


let map = {}

const comRE = /^([a-z\d]+)([A-Z][a-z]+?)$/

Object.keys(page).forEach((route)=>{
    var tmp = route.replace(comRE,'$1.$2').toLowerCase()
    map['/'+tmp] = {
        component:page[route]
    }
})

export default function install(router) {
    router.map(map);
    router.redirect({
    	'*':'/menus.appbar'
    });
}
