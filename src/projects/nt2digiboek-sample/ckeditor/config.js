/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'about', groups: [ 'about' ] },
		{ name: 'others', groups: [ 'others' ] }
	];

	config.removeButtons = 'Source,Save,NewPage,Preview,Templates,PasteText,PasteFromWord,Find,Scayt,Replace,Form,Radio,Checkbox,TextField,Textarea,Select,Button,ImageButton,HiddenField,SelectAll,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Image,Flash,PageBreak,Iframe,About,ShowBlocks';
    config.enterMode = CKEDITOR.ENTER_BR;
    config.width = 854;
    config.height = 480;
    config.resize_dir = 'both';
};

