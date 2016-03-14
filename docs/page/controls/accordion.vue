<template>
    <div class="example">
        <div class="grid">
            <show-code>
                <div class="row cells4">
                    <div class="cell">
                        <h5>accordion</h5>
                        <accordion>
                            <panel title="面板名称-面板A" active>
                                <p>类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。</p>
                            </panel>
                            <panel title="面板名称-面板B">
                                <p>prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                            </panel>
                            <panel title="面板名称-面板C">
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                        </accordion>
                    </div>
                    <div class="cell">
                        <h5>accordion multi</h5>
                        <accordion multi>
                            <panel title="面板名称-面板A">
                                <p>类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。</p>
                            </panel>
                            <panel title="面板名称-面板B" active>
                                <p>prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                            </panel>
                            <panel title="面板名称-面板C">
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                        </accordion>
                    </div>
                    <div class="cell">
                        <h5>accordion disabled</h5>
                        <accordion>
                            <panel title="面板名称-面板A">
                                <p>类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。</p>
                            </panel>
                            <panel title="面板名称-面板B" active>
                                <p>prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                            </panel>
                            <panel title="panel disabled" disabled>
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                        </accordion>
                    </div>
                    <div class="cell">
                        <h5>accordion icon</h5>
                        <accordion>
                            <panel title="图标mif-home" icon="mif-home">
                                <p>类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。</p>
                            </panel>
                            <panel title="图标mif-cog" icon="mif-cog">
                                <p>prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                            </panel>
                            <panel title="图标mif-database" icon="mif-database">
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                        </accordion>
                    </div>
                </div>
            </show-code>
            <div class="row">
                <div class="cell">
                    <h5>accordion large</h5>
                    <show-code>
                        <accordion large>
                            <panel title="图标mif-home" icon="mif-home" active>
                                <p>类似于绑定一个普通的特性到一个表达式，也可以用 v-bind 绑定动态 Props 到父组件的数据。</p>
                            </panel>
                            <panel title="图标mif-cog" icon="mif-cog">
                                <p>prop 默认是单向绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。</p>
                            </panel>
                            <panel title="图标mif-database" icon="mif-database">
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                            <panel title="图标mif-database" icon="mif-database" disabled>
                                <p>双向绑定会把子组件的 msg 属性同步回父组件的 parentMsg 属性。单次绑定在建立之后不会同步之后的变化。</p>
                            </panel>
                        </accordion>
                    </show-code>
                </div>
            </div>
        </div>
</template>
<script>
</script>
