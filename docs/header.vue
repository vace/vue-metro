<template>
    <appbar fixed-top>
    <!-- <header class="app-bar fixed-top navy" data-role="appbar"> -->
        <div class="container">
            <a href="/" class="app-bar-element branding"> Vue-Metro</a>
            <ul class="app-bar-menu small-dropdown">
                <dmenu :menus="BASE" title="Base"></dmenu>
                <dmenu :menus="WIDGETS" title="Widgets"></dmenu>
                <dmenu :muens="COMMUNITY" title="Community"></dmenu>
            </ul>
            <span class="app-bar-pull"></span>
        </div>
    <!-- </header> -->
    </appbar>
</template>

<script>

    export default{
        data:function(){
            return {
                BASE:[
                    {
                        title:'Icon',
                        href:'#base.icon'
                    }
                ],

                WIDGETS:[
                    {
                        title:'Accordion',
                        href:'#controls.accordion'
                    },
                    {
                        title:'Tabs',
                        href:'#controls.tabs'
                    }
                ],
                COMMUNITY:[
                    {
                        title:'Forum',
                        href:'http://forum.metroui.org.ua'
                    },
                    {
                        title:'Vue-Metro-Github',
                        href:'https://github.com/vace/vue-metro'
                    },
                    {
                        title:'Metro-UI-Github',
                        href:'https://github.com/olton/Metro-UI-CSS'
                    }
                ]
            }
        }
    }

</script>
