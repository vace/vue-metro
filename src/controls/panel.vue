<template>
	<div class="frame" :class="{active:active}">
	    <div class="heading">{{title}}</div>
	    <div class="content">
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
			}
		}
	}
</script>