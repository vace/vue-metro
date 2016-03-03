<template>
	<div class="example">

		<div class="grid">
		    <div class="row cells3">
		        <div class="cell">
		            <h5>.accordion</h5>
		            <accordion>
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

		       <!--  <div class="cell">
		            <h5>.accordion with disabled item</h5>
		            <accordion></accordion>
		        </div>

		        <div class="cell">
		            <h5>.accordion with icon</h5>
		            <accordion></accordion>
		        </div> -->
		    </div>

		    <!-- <div class="row">
		        <div class="cell">
		            <h5>.accordion & .large-heading</h5>
		            <accordion></accordion>
		    </div> -->
		</div>
	</div>
</template>

<script>
	
</script>