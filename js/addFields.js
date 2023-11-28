
(function($){
$.fn.addInput = function(options) {
/***************************************/
/** List of available default options **/
/***************************************/
var defaults = {
Container_Cloned : '.contenitore_input',//--> class (NO ID) to be assigned to the div that will contain the fields
Required_Class : 'obbligatorio',//--> class to assign to the fields that can not be left blank
Numeric_Class : 'numerico',//--> class to indicate that a field must be numeric
Email_Class : 'email',//--> class to indicate that a field must contain an e-mail
Date_Class : 'data',//--> class to indicate that a field must contain a date in the format dd / mm / yyyy
Error_Class : 'error',//--> class that will be assigned to fields with errors on the basis of previous classes
Delete_Class : 'elimina',//--> class (NO ID) to be assigned to buttons that eliminate the fields
Button_Add : '',//--> id or class to be assigned to the button that adds the fields
Start_Attribute : 'alt',//--> attribute to be assigned to fields as a reference for "NAME" and "ID"
First_Visible : true,//--> marks if the first div "contenitore_input" must be visible or not "false"
Post_Insert : function(){},//--> function/s that are triggered immediately after adding fields
Post_Remove : function(){}//--> function/s that are triggered immediately after you delete fields
};
//--------------------------------------------------------------------------////---------------------------------------------------------//
var options = $.extend(defaults, options);
return this.each(function() {
var o = options
/************************************************************/
/* array to clone the attributes different from the initial */
/************************************************************/
var tb = $(this)
var n_tr = tb.find(o.Container_Cloned).length
var tr = tb.find(o.Container_Cloned+':first').html()
var arr_attr = tb.find(o.Container_Cloned)[0].attributes
var attr_list = [];
for(var i = 0; i < arr_attr.length; i++) {
if(arr_attr[i].name != o.Start_Attribute){
attr_list.push(arr_attr[i].name + '="'+arr_attr[i].value+'" ')
}
}
var tag = tb.find(o.Container_Cloned+':first')[0].tagName
/****************************************************/
/* determine whether the first input can be deleted */
/****************************************************/
if(o.First_Visible || n_tr > 1 || tb.find(o.Container_Cloned+':first input,'+o.Container_Cloned+':first select,'+o.Container_Cloned+':first textarea').val().replace(/^\s+|\s+$/g,"") != ''){
tb.find(o.Container_Cloned+':first').find('input,select,textarea').each(function(){
var id = $(this).attr(o.Start_Attribute)
var name = $(this).attr(o.Start_Attribute)
var $this = $(this)
$this.attr({id:id+'_1',name:name+'_1'})
});
}else{
$(o.Container_Cloned+':first').remove()
}
/*****************************************/
/* Control and validation fields on load */
/*****************************************/
$(o.Container_Cloned+' input,'+o.Container_Cloned+' select,'+o.Container_Cloned+' textarea').each(function(){
var $this = $(this)
$this.bind("change click keyup",function(){
/* requirend and empty fields */
if($this.hasClass(o.Required_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") == ''){
$this.addClass('w_error_o')
}else{
$this.removeClass('w_error_o')
}
}
/* numeric fields */
if($this.hasClass(o.Numeric_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") != '' && isNaN($this.val())){
$this.addClass('w_error_n')
}else{
$this.removeClass('w_error_n')
}
}
/* date fields */
if($this.hasClass(o.Date_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") != '' && !(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i.test($this.val()))){
$this.addClass('w_error_d')
}else{
$this.removeClass('w_error_d')
}
}
/* e-mail fields */
if($this.hasClass(o.Email_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") != '' && !(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test($this.val()))){
$this.addClass('w_error_e')
}else{
$this.removeClass('w_error_e')
}
}
/* attribution of the error class */
if($this.hasClass('w_error_o') || $this.hasClass('w_error_n') || $this.hasClass('w_error_d') || $this.hasClass('w_error_e')){
$this.addClass(o.Error_Class)
}else{
$this.removeClass(o.Error_Class)
}
});
});
$(o.Button_Add).click(function(){ //This is the function that runs when the user clicks on "ADD Field"
/* new control and validation fields after click on "ADD Field" */
$(o.Container_Cloned+' input,'+o.Container_Cloned+' select,'+o.Container_Cloned+' textarea').each(function(){
var $this = $(this)
if($this.hasClass(o.Required_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") == ''){
$this.addClass('w_error_o')
}else{
$this.removeClass('w_error_o')
}
}
if($this.hasClass(o.Numeric_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") != '' && isNaN($this.val())){
$this.addClass('w_error_n')
}else{
$this.removeClass('w_error_n')
}
}
if($this.hasClass(o.Date_Class)){
if($this.val().replace(/^\s+|\s+$/g,"") != '' && !(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/i.test($this.val()))){
$this.addClass('w_error_d')
}else{
$this.removeClass('w_error_d')
}
}
if($this.val().replace(/^\s+|\s+$/g,"") != '' && $this.hasClass(o.Email_Class)){
if(!(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test($this.val()))){
$(this).addClass('w_error_e')
}else{
$(this).removeClass('w_error_e')
}
}
if($this.hasClass('w_error_o') || $this.hasClass('w_error_n') || $this.hasClass('w_error_d') || $this.hasClass('w_error_e')){
$(this).addClass(o.Error_Class)
$(o.Container_Cloned).find('.'+o.Error_Class).focus()
$(o.Container_Cloned).find('.'+o.Error_Class+':first').focus();
}else{
$this.removeClass(o.Error_Class)
}
});
/********************************/
/* cloning Fields and Container */
/********************************/
if(!$(o.Container_Cloned).find('input,textarea,select').hasClass(o.Error_Class)){
tb
.append('<'+tag+' '+attr_list+'>'+tr+'</'+tag+'>')
tb
.find(o.Container_Cloned+':last input,'+o.Container_Cloned+':last select,'+o.Container_Cloned+':last textarea').val('')
.each(function(){
var $this = $(this)
var id = $this.attr(o.Start_Attribute)
var name = $this.attr(o.Start_Attribute)
var nn = tb.find(o.Container_Cloned).length
$this.attr({id:id+'_'+nn,name:name+'_'+nn})
});
o.Post_Insert.call(this); //This is a callback function that runs when the fields are added
}
});
$(tb).delegate('.'+o.Delete_Class,'click',function(){ //This is the function that runs when the user clicks on "REMOVE Field"
var nx = $(this).closest(o.Container_Cloned).prevAll().length
$(this).closest(o.Container_Cloned).nextAll().each(function(nn){
nn++
var nn = nn+nx
$(this).find('input,select,textarea').each(function(){
var id = $(this).attr(o.Start_Attribute)
var name = $(this).attr(o.Start_Attribute)
$(this).attr({'id':id+'_'+nn,'name':name+'_'+nn});
});
});
if(o.First_Visible){
if($(o.Container_Cloned).length == 1){
alert('Sorry, you can\'t delete the first option')
return false
}
if($(o.Container_Cloned).length > 1){
$(this).closest(o.Container_Cloned).remove()
}
}else{
$(this).closest(o.Container_Cloned).remove()
}
o.Post_Remove.call(this); //This is a callback function that runs when the fields are removed
});
//--------------------------------------------------------------------------////---------------------------------------------------------//
});
};
})(jQuery);
