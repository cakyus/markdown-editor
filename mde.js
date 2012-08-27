
var oShowdown = new Showdown.converter();

$(document).ready(function(){
	(new mde).init();
});

function mde() {
	
	this.init = function() {
		// add event handlers
		$('.mde-showCode').click({ handler:this }, function(e){
			e.data.handler.showCode();
		});
		$('.mde-showHTML').click({ handler:this }, function(e){
			e.data.handler.showHTML();
		});
		$('.mde-showPreview').click({ handler:this }, function(e){
			e.data.handler.showPreview();
		});
		$('.mde-save').click({ handler:this }, function(e){
			e.data.handler.save();
		});
		
		// default
		this.showPreview();
	}
	
	this.showCode = function() {
		// hide all views
		$('article.view').css('display', 'none');
		// show
		$('article.view-code').css('display', 'block');
		$('.sidebar nav a').css('background-color', '#fff');		
		$('.mde-showCode').css('background-color', '#ddd');		
	} 
	
	this.showHTML = function() {
		// hide all views
		$('article.view').css('display', 'none');
		// show
		$('article.view-html').html(
			this.highlight(
				oShowdown.makeHtml($('.view-code-editor').val())
			)
		);
		
		$('article.view-html').css('display', 'block');
		$('.sidebar nav a').css('background-color', '#fff');		
		$('.mde-showHTML').css('background-color', '#ddd');		
	}
	
	this.showPreview = function() {
		// hide all views
		$('article.view').css('display', 'none');
		
		$('article.view-preview').html(
			oShowdown.makeHtml($('.view-code-editor').val())
		);
		
		// show
		$('article.view-preview').css('display', 'block');
		$('.sidebar nav a').css('background-color', '#fff');		
		$('.mde-showPreview').css('background-color', '#ddd');		
	}
	
	this.save = function() {
		//@todo write something here ..
		alert('Sorry, not yet implemented');
	}
	
	this.highlight = function(value) {
		// a very simple html highlighter
		var text = String(value);
		// html tag
		text = text.replace(/<(\/)?([\w]+)([^>]+)*>/g,'<span class="mde-html-tag">&lt;$1$2$3&gt;</span>');
		text = text.replace(/\n/g,'<br />');
		return text;
	}
}

