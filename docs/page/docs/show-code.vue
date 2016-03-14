<template>

<slot></slot>

<div class="example" data-text="code">
	<pre>
		<code class="hljs html">{{{innerHtml}}}</code>
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
		var innerHtml = fragment.innerHTML.replace(pregExp, '$1')
		var res = hljs.highlight('html',html_beautify(innerHtml));
		this.innerHtml = res.value
	}
}
</script>