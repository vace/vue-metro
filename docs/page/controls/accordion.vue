<template>
	<div class="example">

		<div class="grid">
		    <div class="row cells4">
		        <div class="cell">
		            <h5>accordion</h5>
		            <accordion>
		            	<panel title="面板名称-面板A" active>
		            		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
		            	</panel>
		            	<panel title="面板名称-面板B">
		            		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
		            	</panel>
		            	<panel title="面板名称-面板C">
		            		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		            	</panel>
		            </accordion>
		        </div>

		        <div class="cell">
		            <h5>accordion multi</h5>
		            <accordion multi>
		            	<panel title="面板名称-面板A">
		            		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
		            	</panel>
		            	<panel title="面板名称-面板B" active>
		            		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
		            	</panel>
		            	<panel title="面板名称-面板C">
		            		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		            	</panel>
		            </accordion>
		        </div>

		        <div class="cell">
		            <h5>accordion disabled</h5>
		            <accordion>
		            	<panel title="面板名称-面板A">
		            		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
		            	</panel>
		            	<panel title="面板名称-面板B" active>
		            		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
		            	</panel>
		            	<panel title="panel disabled" disabled>
		            		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		            	</panel>
		            </accordion>
		        </div>

		        <div class="cell">
		            <h5>accordion icon</h5>
		            <accordion>
		            	<panel title="图标mif-home" icon="mif-home">
		            		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
		            	</panel>
		            	<panel title="图标mif-cog" icon="mif-cog">
		            		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
		            	</panel>
		            	<panel title="图标mif-database" icon="mif-database">
		            		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		            	</panel>
		            </accordion>
		        </div>
		    </div>

		    <div class="row">
		        <div class="cell">
		            <h5>accordion large</h5>
		           	<accordion large>
		           		<panel title="图标mif-home" icon="mif-home" active>
		           			类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
		           		</panel>
		           		<panel title="图标mif-cog" icon="mif-cog">
		           			prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
		           		</panel>
		           		<panel title="图标mif-database" icon="mif-database">
		           			双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		           		</panel>

		           		<panel title="图标mif-database" icon="mif-database" disabled>
		           			双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
		           		</panel>
		           	</accordion>
		    </div>

		</div>
	</div>

	<div class="example">
		<h5>HTML</h5>
		<pre>
			<code class="language-markup">
				<script type="text/html">
<h5>accordion</h5>
<accordion>
	<panel title="面板名称-面板A" active>
		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
	</panel>
	<panel title="面板名称-面板B">
		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
	</panel>
	<panel title="面板名称-面板C">
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>
</accordion>


<h5>accordion multi</h5>
<accordion multi>
	<panel title="面板名称-面板A">
		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
	</panel>
	<panel title="面板名称-面板B" active>
		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
	</panel>
	<panel title="面板名称-面板C">
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>
</accordion>


<h5>accordion disabled</h5>
<accordion>
	<panel title="面板名称-面板A">
		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
	</panel>
	<panel title="面板名称-面板B" active>
		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
	</panel>
	<panel title="panel disabled" disabled>
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>
</accordion>


<h5>accordion icon</h5>
<accordion>
	<panel title="图标mif-home" icon="mif-home">
		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
	</panel>
	<panel title="图标mif-cog" icon="mif-cog">
		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
	</panel>
	<panel title="图标mif-database" icon="mif-database">
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>
</accordion>


 <h5>accordion large</h5>
<accordion large>
	<panel title="图标mif-home" icon="mif-home" active>
		类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。
	</panel>
	<panel title="图标mif-cog" icon="mif-cog">
		prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。
	</panel>
	<panel title="图标mif-database" icon="mif-database">
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>

	<panel title="图标mif-database" icon="mif-database" disabled>
		双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。
	</panel>
</accordion>
				</script>
			</code>
		</pre>
	</div>
</template>

<script>
</script>