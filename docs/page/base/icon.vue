<template>
	<doc-title> Metro Icon Font </doc-title>

	<div class="margin20 no-margin-left no-margin-right sub-header text-light">
	    Metro Icon Font gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. Metro Icon Font includes over 400 icons.
	</div>

	<h4>How to use</h4>
	<div class="example" data-text="code">

	    <h5>Include in page head:</h5>
	    <pre class="prettyprint linenums"><code>
	        &lt;link href="metro-icons.css" rel="stylesheet"&gt;
	    </code></pre>

	    <h5>In html use:</h5>
	    <pre class="prettyprint linenums"><code>
	        &lt;icon font="icon_name"&gt;&lt;/icon&gt;
	    </code></pre>
	</div>

	<p>
	    To change size icon you can use next classes: <span class="tag">lg</span>, <span class="tag">x2</span>, <span class="tag">x3</span>, <span class="tag">x4</span>.
	</p>
	
	<show-code>
<div class="example" data-text="size">
	Icons can be resized to any
	<icon name="mif-earth"></icon>
	<icon name="mif-earth" lg></icon>
	<icon name="mif-earth" x2></icon>
	<icon name="mif-earth" x3></icon>
	<icon name="mif-earth" x4></icon>
	sizes over built-in classes
</div>
	</show-code>

	<p>
	    To change icon color you can use <span class="tag">color="xx"</span> classes or use css property <span class="tag">color</span>.
	</p>

	<show-code>
<div class="example" data-text="color">
	<icon name="mif-earth" color="fg-cyan"></icon>
	<icon name="mif-earth" color="fg-green"></icon>
	<icon name="mif-earth" color="fg-green" x4></icon>

</div>
	</show-code>


	<h2 class="text-light pos-rel">Icons <span class="small dropdown-toggle">goto</span>
	    <ul class="d-menu context" data-role="dropdown">
	        <li><a href="#_application_">Application icons</a></li>
	        <li><a href="#_mobile_">Mobile icons</a></li>
	        <li><a href="#_device_">Device icons</a></li>
	        <li><a href="#_player_">Player icons</a></li>
	        <li><a href="#_brand_">Brand icons</a></li>
	        <li><a href="#_weather_">Weather icons</a></li>
	        <li><a href="#_chart_">Chart icons</a></li>
	        <li><a href="#_spinner_">Spinner icons</a></li>
	    </ul>
	</h2>

	<p>
	    Below is an exhaustive list of icons that are included in Metro Icon Font.
	</p>
</template>