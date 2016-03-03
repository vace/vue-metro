<template>
	<div class="frame" @click="togglePanel" :class="{active:active,disabled:disabled}">
	    <div class="heading">
	    	{{title}}
			<span v-if="icon" class="icon" :class="icon"></span>
	    </div>
	    <div class="content" v-show="active" transition="slide-down">
	        <slot></slot>
	    </div>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type: String
			},
			active:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			icon:{
				type:String,
				default:''
			}
		},
		methods:{
			togglePanel:function(e){
				if(this.disabled){
					return ;
				}
				this.active = !this.active
				this.$dispatch('open-panel',this)
			}
		}
	}
</script>

<style>
	/*animated*/
	.accordion > .frame > .content{
		display:block;
	}
	
</style>