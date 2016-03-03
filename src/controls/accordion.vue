<template>
	<!-- large-heading -->
	<div class="accordion" :class="{'large-heading':large}">
	    <slot></slot>
	</div>
</template>

<script>
	export default {
		props:{
			multi:{
				type:Boolean,
				default:false
			},
			large:{
				type:Boolean,
				default:false
			}
		},
		events:{
			'open-panel':function(sub){
				if(!this.multi){
					this.$children.forEach(function(child){
						if(child !== sub){
							child.active = false
						}
					})
				}
				
			}
		}
	}
</script>