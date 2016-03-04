<template>

<slot></slot>

<div class="example" data-text="code">
	<pre>
		<code class="language-markup">
			{{innerHtml}}
		</code>
	<pre>
</div>
</template>

<script>

let pregExp = /(\b\w+?)=""/g
export default{
	data:function(){
		return {
			innerHtml:''
		}
	},
	ready:function(){
		var fragment = this._slotContents.default.firstChild
		//replace xx=""
		this.innerHtml = fragment.innerHTML.replace(pregExp, '$1')
	}
}
</script>