<template>
	<!-- large-heading -->
	<div class="accordion">
	    <slot></slot>
	</div>
</template>

<script>
	export default {
		created(){
			console.log(this)
		},
		events:{
			'open-panel':function(index){

			}
		}
	}
</script>