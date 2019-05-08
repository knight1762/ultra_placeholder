/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2019 k ng
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
(function($){
	$.fn.ultra_placeholder = function(options ){
		var settings = $.extend({
			color:'#ccc'
		},options);

		var parents_form = this.parents('form');
		var target = this;

		// 0. clear default value before form submit
		parents_form.on("submit",function(){
			target.each(function(){
				if($.trim($(this).val())==$(this).attr('data-placeholder')){
					$(this).val('');
				}
			});
			return true;
		});

		return this.each(function(){

			// 1. get each placeholder value
			var tmp = $(this).attr('placeholder');
			var default_color = $(this).css('color');

			// 2. create a new attr on the element to save the value
			$(this).attr({'data-placeholder':tmp});

			// 3. remove the original placeholder value
			$(this).attr({'placeholder':''});

			// 4. insert placeholder to value
			if($.trim($(this).val())==''){
				$(this).val(tmp).css({'color':settings.color});
			}

			// 5. clear on focus / click / touch
			$(this).on('click focus',function(){
				if($.trim($(this).val())==tmp){
					$(this).val('').css({'color':default_color});
				}
			});

			// 6. reset on focusout if empty value
			$(this).on('foucsout blur',function(){
				if($.trim($(this).val())==''){
					$(this).val(tmp).css({'color':settings.color});
				}
			});
		});
	};
}(jQuery));
