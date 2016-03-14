<template>
	<div class="frame" :style="{display:display ? 'block':'none' }">
		<slot></slot>
	</div>
</template>

<script>
	import mixin from '../mixin'
	export default{
		mixins:[mixin],
		props:{
			active:{type:Boolean,default:false},
			disabled:{type:Boolean,default:false},
			title:{type:String,default:''}
		},
		data:function(){
			return {
				display:false
			}
		},
		created(){
			this.$dispatch('pushTab',{id:this.uuid,title:this.title,disabled:this.disabled,active:this.active})
		},
		events:{
			closeTab(){
				this.display = false
			},
			openTab(){
				this.display = true
			}
		}
	}
</script>