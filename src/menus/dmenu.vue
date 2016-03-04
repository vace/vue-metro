<template>
	<a href="#" class="dropdown-toggle">Base CSS</a>
	<ul class="d-menu" data-role="dropdown" @click="toggleMenus">
	    <slot is="ul"></slot>
	</ul>
</template>

<script>
	export default {
		methods:{
			toggleMenus(){
				
			}
		}
	}
</script>