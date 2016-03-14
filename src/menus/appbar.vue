<template>
	<div class="app-bar" :class="{'fixed-top':fixedTop}" data-role="appbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props:{
			fixedTop:{
				type:Boolean,
				default:false
			}
		},
		ready(){
			// console.log(this.props)
			// console.log(this.$els.appbar)
		},
		events:{
			menuOpened(uuid){
				this.$broadcast('closeMenuFromAppbar',uuid)
			}
		}
	}
</script>