import page from './page/'

export default function install(router) {
    router.map({
        '/controls.accordion':{
            component: page.controlsAccordion
        },
    });

    router.redirect({
    	'*':'/controls.accordion'
    });
}
