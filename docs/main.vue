<template>
	<main-header></main-header>
	<div class="container page-content" style="margin-top: 65px;">
        <router-view></router-view>
	</div>
	<main-footer></main-footer>
</template>
<script>
	import mainHeader from './header.vue'
	import mainFooter from './footer.vue'
	export default{
		components:{mainHeader,mainFooter},
		replace:false
	}
</script>