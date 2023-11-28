//Doc Ready Start
$(document).ready(function() {

	//Toggle
	$('.show').click(function() {
		$(this).find(".text").toggle();
		$(this).next('.slidingDiv').slideToggle();
		return false;
	});
	$('.hide').click(function() {
		$(this).parent().slideUp();
		return false;
	});

	//DatePicker with Input Field
	// $(function() {
	// 	$( "#datepicker" ).datepicker({
	// 		showOn: "button",
	// 		buttonImage: "images/calendar.gif",
	// 		buttonImageOnly: true,
	// 		dateFormat: "dd/mm/yy"
	// 	});
	// });

	//DatePicker Inline
	$(function() {
		$( "#datepicker" ).datepicker();
	});

	


});// Doc Ready End