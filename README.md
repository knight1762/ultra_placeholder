# ultra_placeholder
This plugin is use to change the placeholder behavior
1. placeholder color (default is #333)
2. clear placeholder when focus the input box
3. will clear placeholder when submit form

## Usage

### HTML 
```
<div class="content">
	<form>
		<input type="text" data-placeholder="Please Enter Your Name">
		<textarea data-placeholder="Please Enter Your Comments"></textarea>
	</form>
</div>　
```

### JS file
```
$( ".content input[type=text], .content textarea" ).ultra_placeholder();
```
			
