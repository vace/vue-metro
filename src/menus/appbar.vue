<template>
	<div class="app-bar" v-el:appbar>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		ready(){
			console.log(this.$els.appbar)
		}
	}
</script>