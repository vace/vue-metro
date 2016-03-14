<template>
	<div :class="{tabcontrol:!skin,tabcontrol2:skin,'tabs-bottom':bottom}">
	    <div class="frames" v-if="bottom">
	    	<slot></slot>
		</div>

		<ul class="tabs" :class="{'tab-bottom':bottom}">
	        <li @click="!tab.disabled && (activeUuid = tab.id)" v-for="tab in tabs" track-by="$index" :class="{active:activeUuid==tab.id,disabled:tab.disabled}">
	        	<a>{{tab.title}}</a>
	        </li>
	    </ul>

	    <div class="frames" v-if="!bottom">
	    	<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			//是否靠底部
			bottom:{
				type:Boolean,
				default:false
			},
			//是否使用特殊皮肤
			skin:{
				type:Boolean,
				default:false
			}
		},
		data:function(){
			return {
				tabs:[],
				activeUuid:''
			}
		},
		watch:{
			activeUuid(val){
				this.$broadcast('toggleTabs',val)
			}
		},
		ready(){
			var index = 0;
			for(var i = 0, _len = this.tabs.length ; i < _len ; i++){
				if(this.tabs[i].active){
					index = i;
					break;
				}
			}
			this.activeUuid = this.tabs[index].id
		},
		events:{
			pushTab(tab){
				this.tabs.push(tab)
			}
		}
	}
</script>