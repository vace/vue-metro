<template>
	<appbar>
	    <a class="app-bar-element" href="...">Home</a>
	    <span class="app-bar-divider"></span>
	    <ul class="app-bar-menu">
	        <li><a href="">Home</a></li>
	        <li>
	        	<dmenu>
		            <ul class="d-menu" data-role="dropdown">
		                <li><a href="">Windows 10</a></li>
		                <li><a href="">Spartan</a></li>
		                <li><a href="">Outlook</a></li>
		                <li><a href="">Office 2015</a></li>
		                <li class="divider"></li>
		                <li><a href="" class="dropdown-toggle">Other Products</a>
		                    <ul class="d-menu" data-role="dropdown">
		                        <li><a href="">Internet Explorer 10</a></li>
		                        <li><a href="">Skype</a></li>
		                        <li><a href="">Surface</a></li>
		                    </ul>
		                </li>
		            </ul>
	            </dmenu>
	        </li>
	        <li><a href="">Support</a></li>
	        <li><a href="">Help</a></li>
	    </ul>
	</appbar>
</template>

<script>
	export default{
		data:function(){
			menus:{

			}
		}
	}
</script>