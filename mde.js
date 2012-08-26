
$(document).ready(function(){
	(new mde).init();
});

function mde() {
	this.init = function() {
		this.editor.showCode();
	}
	this.editor = (new editor);
	function editor() {
		this.showCode = function() {
			// @todo write something here ..
		}
		this.showHTML = function() {}
		this.showPreview = function() {}
	}
}

