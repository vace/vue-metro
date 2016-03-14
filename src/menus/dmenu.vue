<template>
    <li>
    	<a href="#" class="dropdown-toggle" :class="{'active-toggle':opening}" @click.prevent="openDropdown">{{title}}</a>
        <ul class="d-menu" data-role="dropdown" v-show="opening" style="display:block;">
            <li v-for="menu in menus" @click="selectMenu(menu.href)">
            	<a v-if="menu.href" :href="menu.href">{{menu.title}}</a>
            	<dmenu v-if="menu.subs" :title="menu.title" :menus="menu.subs"></dmenu>
            </li>
        </ul>
    </li>
</template>

<script>
	// TODO
	import mixin from '../mixin'

	export default {
		mixins:[mixin],

		props:{
				title:{type:String},
				menus:{type: Array,default(){return []}}
			},
		data:function(){
			return {
				opening:false,
				isSubOpening:false
			}
		},
		ready:function(){

		},
		methods:{
			openDropdown(){
				console.log(this.uuid)
				this.opening = !this.opening
				if(this.opening){
					this.$dispatch('menuOpened',this.uuid)
				}
			},
			selectMenu(href){
				if(href){
					this.opening = false
				}
			}
		},
		events:{
			closeMenuFromAppbar(uuid){
				if(this.opening && this.uuid !== uuid){
					this.opening = false;
				}
				
			}
		}
	}
</script>
<style scoped>
	[data-role="dropdown"]:not(.open), [data-role="dropdown"]:not(.keep-open){
		display:block;
	}
</style>