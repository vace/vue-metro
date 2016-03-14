<template>
	<div class="window">
	    <div class="window-caption">
	        <span class="window-caption-icon" v-if="icon"><span :class="icon"></span></span>
	        <span class="window-caption-title">{{title}}</span>
	        <span class="btn-min" v-show="min"></span>
	        <span class="btn-max" v-show="max"></span>
	        <span class="btn-close" v-show="close"></span>
	    </div>
	    <div class="window-content" style="height: 100px">
	        <slot></slot>
	    </div>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			},
			min:{
				type:Boolean,
				default:false
			},
			max:{
				type:Boolean,
				default:false
			},
			close:{
				type:Boolean,
				default:false
			},
			icon:{
				type:String,
				default:''
			}
		}
	}
</script>