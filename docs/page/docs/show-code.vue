<template>

<slot v-el:code></slot>

<div class="example" data-text="code">
	<pre>
		<code class="language-markup">
			{{innerHtml}}
		</code>
	<pre>
</div>
</template>

<script>
export default{
	data:function(){
		return {
			innerHtml:''
		}
	},
	ready:function(){
		var fragment = this._slotContents.default.firstChild
		this.innerHtml = fragment.innerHTML
	}
}
</script>