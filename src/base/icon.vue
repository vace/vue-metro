<template>
	<span :class="[name,color,lg?'mif-lg':'',x2?'mif-2x':'',x3?'mif-3x':'',x4?'mif-4x':'']"></span>
</template>

<script>
	//size mif-lg, mif-2x, mif-3x, mif-4x
	export default{
		props:{
			name:String,
			color:{type:String,default:''},
			lg:{type:Boolean,default:false},
			x2:{type:Boolean,default:false},
			x3:{type:Boolean,default:false},
			x4:{type:Boolean,default:false}
		}
	}
</script>