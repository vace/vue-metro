<template>
    <h1>
    	<a href="index.html" class="nav-button transform"><span></span></a>&nbsp;Tab Control
    </h1>
   
        <div class="example" data-text="example">
            <div class="grid responsive">
                <div class="row cells2">
                    <div class="cell">
                        <h5>tabs</h5>
                        <show-code>
                        <tabs>
                            <tab title="Tab 1">
                                <p>String</p>
                            </tab>
                            <tab title="Tab 2">
                                <p>p</p>
                            </tab>
                            <tab title="Tab 3" disabled>
                                <p>disabled</p>
                            </tab>
                        </tabs>
                        </show-code>
                        <h5>tabs skin</h5>
                        <show-code>
                        <tabs skin>
                            <tab title="Tab 1">
                                <p>String</p>
                            </tab>
                            <tab title="Tab 2">
                                <p>p</p>
                            </tab>
                            <tab title="Tab 3" disabled>
                                <p>disabled</p>
                            </tab>
                        </tabs>
                        </show-code>
                    </div>
                    <div class="cell">
                        <h5>tabs button</h5>
                         <show-code>
                        <tabs bottom>
                            <tab title="Tab 1">
                                <p>String</p>
                            </tab>
                            <tab title="Tab 2">
                                <p>p</p>
                            </tab>
                            <tab title="Tab 3" disabled>
                                <p>disabled</p>
                            </tab>
                        </tabs>
                        </show-code>
                        <h5>skin & bottom</h5>
                        <show-code>
                        <tabs skin bottom>
                            <tab title="Tab 1">
                                <p>String</p>
                            </tab>
                            <tab title="Tab 2">
                                <p>p</p>
                            </tab>
                            <tab title="Tab 3" disabled>
                                <p>disabled</p>
                            </tab>
                        </tabs>
                        </show-code>
                    </div>
                </div>
            </div>
            <div class="grid responsive">
                <div class="cell">
                    <h5>tabs</h5>
                    <show-code>
                    <tabs>
                        <tab title="Panel1">
                            <tabs skin>
                                <tab title="Panel1">
                                    <p>String</p>
                                </tab>
                                <tab title="Panel2">
                                    <p>p</p>
                                </tab>
                                <tab title="Panel3" disabled>
                                    <p>disabled</p>
                                </tab>
                            </tabs>
                        </tab>
                        <tab title="Panel2">
                            <tabs skin bottom>
                                <tab title="Panel1">
                                    <p>String</p>
                                </tab>
                                <tab title="Panel2">
                                    <p>p</p>
                                </tab>
                                <tab title="Panel3" disabled>
                                    <p>disabled</p>
                                </tab>
                            </tabs>
                        </tab>
                        <tab title="Panel3" disabled>
                            <p>disabled</p>
                        </tab>
                    </tabs>
                    </show-code>
                </div>
            </div>
        </div>
</template>
