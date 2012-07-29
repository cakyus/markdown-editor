var oShowdown = new Showdown.converter();
var oPageEdit = new PageEdit();

window.addEventListener('load', function () {
	oPageEdit.Resize();
}, true);

window.addEventListener('resize', function () {
	oPageEdit.Resize();
}, true);
			
$(document).ready(function(){
	oPageEdit.Show();
});

function PageEdit() {
	
	this.Show = function(){
		
		$('#page-edit-editor').keyup(function(){
			oPageEdit.ShowHtml();
		});

		$('#action-show-html').click(function(){
			oPageEdit.ShowHtml();
		});
		
		$('.page-edit').css('display','block');
		
		// test
		$('#page-edit-editor').html('Hello World !');
		
		this.ShowHtml();
	}
	this.Resize = function(){
		var ps = document.getElementsByClassName('page');
		var phs = document.getElementsByClassName('page-header');
		var pcs = document.getElementsByClassName('page-content');
		var pfs = document.getElementsByClassName('page-footer');
		
		ph = parseInt(window.getComputedStyle(ps[0],null).height);
		phh = parseInt(window.getComputedStyle(phs[0],null).height);
		pfh = parseInt(window.getComputedStyle(pfs[0],null).height);
		
		pch = ph-phh-pfh;
		pcs[0].style.height = pch+'px';
	}
	this.ShowCode = function(){
		this.ShowPageContent('.page-content-code');
	}
	this.ShowHtml = function(){
		// alert('Hi');
		this.ShowPageContent('.page-content-html');
		$('#page-edit-html').html(
			highlight(
				oShowdown.makeHtml($('#page-edit-editor').val())
			)
		);
	}
	this.ShowView = function(){
		this.ShowPageContent('.page-content-view');
		$('#page-edit-view').html(
			oShowdown.makeHtml($('#page-edit-editor').val())
		);
	}
	this.ShowPageContent = function(CssPageContentName){
		$('.page-edit .page-content-item').css('display','none');
		$('.page-edit '+CssPageContentName).css('display','block');
	}
}

function highlight(value) {
	// a very simple html highlighter
	var text = String(value);
	// html tag
	text = text.replace(/<(\/)?([\w]+)([^>]+)*>/g,'<span class="highlight-tag">&lt;$1$2$3&gt;</span>');
	text = text.replace(/\n/g,'<br />');
	return text;
}

