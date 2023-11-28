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

		var rightIcon = '<span class="icon-arrow-right">';
		var leftIcon = '<span class="icon-arrow-left">';

		// getter
		var nextText = $( "#datepicker" ).datepicker( "option", "nextText" );
		// setter
		$( "#datepicker" ).datepicker( "option", "nextText", rightIcon );
		// getter
		var prevText = $( ".selector" ).datepicker( "option", "prevText" );
		// setter
		$( "#datepicker" ).datepicker( "option", "prevText", leftIcon );
	});

	$("div[data-linkedQuestion]").removeClass('show hide').addClass('hide');


	// Hidden questions show/hide

	// read more

$('.readLess').hide()
$('.slidingDiv').hide()

$('.readMoreLink').click(function(){

	$(this).find(".text").toggle();
	$(this).next('.slidingDiv').slideToggle();
	// $('html, body').animate({
 //        scrollTop: $(this).offset().top - 20
 //    }, 500);

	return false;

});

// Close read more

// details capture interactions

// hiddenQuestion mechanics

$('.hiddenQuestion > div').hide();

$(".linkedQuestion input[type='radio']").click(function(){

	var thisAnswerVal = $(this).val();
	var thisAnswerTrigger = $(this).parent().parent().parent().attr('data-questionTrigger');
	var thisLinkedQuestion = $(this).parent().parent().parent().attr('data-question');

	if (thisAnswerVal == thisAnswerTrigger) {
		$('.hiddenQuestion[data-linkedQuestion="' + thisLinkedQuestion + '"] > div').slideDown($speed1);
	} else {
		$('.hiddenQuestion[data-linkedQuestion="' + thisLinkedQuestion + '"] > div').slideUp($speed1);
	}

	if ((thisLinkedQuestion == "propertyOwnershipQuestion") && (thisAnswerVal == 2)) {

		$('.buildingCoverQuestion').slideUp($speed1);
	} else {
		$('.buildingCoverQuestion').slideDown($speed1);
	}

});

$('.holidayHomeExtraQuestions').hide();
$('.holidayHomeExtraHiddenQuestion').hide();

$(".propertyOwnerStatusQuestion div.inputArea input[type='radio']").click(function(){
	var thisAnswerVal = $(this).val();

	if (thisAnswerVal == 3) {
		$('.holidayHomeExtraQuestions').slideDown($speed1);
	} else {
		$('.holidayHomeExtraQuestions').slideUp($speed1);
	}

});

$(".holidayRentQuestion div.inputArea input[type='radio']").click(function(){
	var thisAnswerVal = $(this).val();

	if (thisAnswerVal == 1) {
		$('.holidayHomeExtraHiddenQuestion').slideDown($speed1);
	} else {
		$('.holidayHomeExtraHiddenQuestion').slideUp($speed1);
	}

});



// $('.linkedQuestion[data-question="propertyOwnershipQuestion"] div input[type="radio"]').click(function(){
// 	alert('hello');
// });

$('.linkedQuestion[data-question="jointOwnershipQuestion"] div input[type="radio"]').click(function(){

	var thisAnswerVal = $(this).val();
	var thisAnswerTrigger = $(this).parent().parent().attr('data-questionTrigger');
	var thisLinkedQuestion = $(this).parent().parent().attr('data-question');

	if (thisAnswerVal == thisAnswerTrigger) {
		$('.hiddenQuestion[data-linkedQuestion="' + thisLinkedQuestion + '"] > div').slideDown($speed1);
	} else {
		$('.hiddenQuestion[data-linkedQuestion="' + thisLinkedQuestion + '"] > div').slideUp($speed1);
	}
});

// close hiddenQuestion mechanics

// BOI special promo section mechanics

$('.promoCodeField, .carPromoFields').hide();

$('.promoQuestion input[type="radio"]').click(function(){
	var thisAnswerVal = $(this).val();
	var thisAnswerTrigger = $(this).parent().parent().attr('data-questionTrigger');

	if (thisAnswerVal == thisAnswerTrigger) {
		$('.promoCodeField').slideDown($speed1);
	} else {
		$('.promoCodeField').slideUp($speed1);
	}
});

$('.carPromoQuestion input[type="radio"]').click(function(){
	var thisAnswerVal = $(this).val();
	var thisAnswerTrigger = $(this).parent().parent().attr('data-questionTrigger');

	if (thisAnswerVal == thisAnswerTrigger) {
		$('.carPromoFields').slideDown($speed1);
	} else {
		$('.carPromoFields').slideUp($speed1);
	}
});

// End BOI special promo sectio mechanics

// address mechanics

$('.addressLookupOutput, .addressConfirmed, .addressUnConfirmed').hide();

$('#findAddressBtn').click(function(){
	$('.addressBlock').slideUp($speed1);
	$('.addressChoice').slideDown($speed1);
	$('.addressLookupOutput').slideDown($speed1);
	return false;
	preventDefault();
});

$('.addressLookupOutput input[type="radio"]').click(function(){
	var thisAnswer = $(this).val();
	if (thisAnswer != 4) {
		$('.addressChoice').slideUp($speed1);
		$('.addressConfirmed').slideDown($speed1);
	} else {
		$('.addressChoice').slideUp($speed1);
		$('.addressUnConfirmed').slideDown($speed1);
	}
});

$('.researchAddress').click(function(){
	$('.addressChoice').slideUp($speed1);
	$('.addressConfirmed, .addressChoice, .addressUnConfirmed').slideUp($speed1);
	$('.addressBlock').slideDown($speed1);
	return false;
	preventDefault();
});

// close address mechanics

// close address mechanics

$('#employmentName').hide();

$('#employmentSelect').change(function(){

	var thisVal = $(this).val();

	if ( (thisVal == "Employed") || (thisVal == "Self Employed") ) {
		$('#employmentName').slideDown($speed1);
	} else {
		$('#employmentName').hide();
	}

});

// close address mechanics

// Claims mechanics

$('#claimLinkedQuestion, .claimPanel1, .claimPanel2').hide();

var claimsVal = $('#claimsQuestion').val();
if (claimsVal == 1) {
		$('#claimLinkedQuestion, .claimPanel1').slideDown($speed1);
		$('.claimPanel2').slideUp($speed1);
	}
if (claimsVal == 2) {
		$('#claimLinkedQuestion, .claimPanel1, .claimPanel2').slideDown($speed1);
	}


$('#claimsQuestion').change(function(){

	var thisVal = $(this).val();

	if (thisVal == 1) {
		$('#claimLinkedQuestion, .claimPanel1').slideDown($speed1);
		$('.claimPanel2').slideUp($speed1);
	}

	if (thisVal == 2) {
		$('#claimLinkedQuestion, .claimPanel1, .claimPanel2').slideDown($speed1);
	}

	if ((thisVal < 1) || (thisVal > 2) || (thisVal == "5 or more")) {
		$('#claimLinkedQuestion, .claimPanel1, .claimPanel2').slideUp($speed1);
	}



});

$('.claimAmount1, .claimAmount2').hide();

$('#claimSettle1 input[type="radio"]').click(function(){
	var thisVal = $(this).val();
	if (thisVal == 1) {
		$('.claimAmount1').slideDown($speed1);
	} else {
		$('.claimAmount1').slideUp($speed1);
	}
});

$('#claimSettle2 input[type="radio"]').click(function(){
	var thisVal = $(this).val();
	if (thisVal == 1) {
		$('.claimAmount2').slideDown($speed1);
	} else {
		$('.claimAmount2').slideUp($speed1);
	}
});



// Close Claims mechanics



// close details capture interactions

// quote summary interactions

$('.addCoverBtn').find('.activeCoverText').hide().end().find('.inactiveCoverText').show();
$('.removeItemlink').hide();

$('.addCoverBtn').click(function(event){
	var thisRemoveBtnLink = $(this).attr('data-removeBtn');
	if ( $(this).hasClass('btnOff') ) {
		$(this).removeClass('btnOff').addClass('btnOn').find('.inactiveCoverText').hide().end().find('.activeCoverText').show();
		$('#'+thisRemoveBtnLink).show();
	} else {
		return false;
	}
	return false;
	event.preventDefault;
});

$('.removeItemlink').click(function(){
	var thisRemoveBtnLink = $(this).attr('id');
	$('a[data-removeBtn="'+thisRemoveBtnLink+'"]').removeClass('btnOn').addClass('btnOff').find('.activeCoverText').hide().end().find('.inactiveCoverText').show();
	$(this).hide();
});



$('#contenitore_generale').addInput({
Button_Add : '#aggiungiInput',
Container_Cloned:'.contenitore_input',
Start_Attribute :'alt',
Delete_Class : 'delete',
First_Visible : true
})

var $speed1 = 350;

$('#contenitore_generale, .specItemAddRemoveBox, .specifiedItemSection').hide();

$('#addSpecItemCover').click(function(event){
	$('#contenitore_generale, .specItemAddRemoveBox').slideDown($speed1);
	$(this).hide();

	$('html, body').animate({
        scrollTop: $("#contenitore_generale").offset().top - 25
    }, 500);
	event.preventDefault;
	return false;
});

$('#addSpecItems').click(function(event){
	$('#contenitore_generale, .specItemAddRemoveBox, .addSpecItemMain').slideUp($speed1);
	$('.specifiedItemSection').slideDown($speed1);
	$('html, body').animate({
        scrollTop: $(".addSpecItemMain").offset().top - 75
    }, 500);
	event.preventDefault;
	return false;
});

$('.removeAllItem').click(function(event){
	$('#contenitore_generale, .specItemAddRemoveBox').slideUp($speed1);
	$('#addSpecItemCover, .addSpecItemMain').slideDown();
	$('.specifiedItemSection').slideUp($speed1);
	$('html, body').animate({
        scrollTop: $(".addSpecItemMain").offset().top - 25
    }, 500);
	event.preventDefault;
	return false;
});

$('.listEditItem').click(function(event){
	$('#contenitore_generale, .specItemAddRemoveBox').slideDown($speed1);
	$('#addSpecItemCover, .addSpecItemMain').slideDown($speed1);
	$('.specifiedItemSection').slideUp($speed1);
	event.preventDefault;
	return false;
});

$('#aggiungiInput').click(function () {
	$('html, body').animate({
        scrollTop: $(".specItemEntryBox:last-of-type").offset().top - 25
    }, 500);
});

// close quote summary interactions

// Contact Form interactions

$('#contactPanel1, #contactPanel2, #contactPanel3, #contactFormClose').hide();

$('#contactFormMainBtn').click(function(event){
	if ($(this).hasClass('off')) {
		$(this).removeClass('off on').addClass('on');
		$('#contactPanel1').slideDown($speed1);
		$('#contactFormClose').slideDown($speed1);
		$('html, body').animate({
        scrollTop: $(".contactBox").offset().top + 30
    }, 500);
	} else {
		$('#contactFormMainBtn').removeClass('off on').addClass('off');
		$('#contactPanel1, #contactPanel2, #contactPanel3, #contactFormClose').slideUp($speed1);
	}
});

$('#requestCallbackBtn').click(function(event){
		$('#contactPanel1').slideUp($speed1);
		$('#contactPanel2, #contactPanel3').slideDown($speed1);
		$('html, body').animate({
        scrollTop: $("#contactFormMainBtn").offset().top
    }, 500);

});

$('#contactFormCloseBtn').click(function(event){
		$('#contactFormMainBtn').removeClass('off on').addClass('off');
		$('#contactPanel1, #contactPanel2, #contactPanel3, #contactFormClose').slideUp($speed1);
});

$('.emailCheck fieldset div').hide();

$('.emailCheck a').click(function(){
	$('.emailCheck fieldset div').slideToggle($speed1);
});

// Close Contact Form interactions



});// Doc Ready End


$(function() {
	$('.correspondenceNo').click(function() {
		$('.correspondenceAddress').show();
	});
	$('.correspondenceYes').click(function() {
		$('.correspondenceAddress').hide();
		$('.editYourPropertyDetails').html('Edit Your Property Details <span class="icon-arrow-right"></span>');
	});
});

$(function() {
	$('.annual').click(function() {
		$('.monthly').removeClass('selected');
		$('.monthly p span').removeClass('icon-tick');

		$(this).addClass('selected');
		$('.annual p span').addClass('icon-tick');
		$('.payAnnuallyOptions').show();

		var annualPrice = $('.annual .price').text();
		$('.paymentBreakdown p span.paymentBreakdownCal').text(annualPrice + " X 1");

		$('.payMonthlyDetails h2').text('Direct Debit Details');
	});
	$('.monthly').click(function() {
		$('.annual').removeClass('selected');
		$('.annual p span').removeClass('icon-tick');
		$('.payAnnuallyOptions').hide();
		$('.payAnnually').hide();

		$(this).addClass('selected');
		$('.monthly p span').addClass('icon-tick');
		$('.payMonthly').show();

		var monthlyPrice = $('.monthly .price').text();
		$('.paymentBreakdown p span.paymentBreakdownCal').text(monthlyPrice + " X 12");

		$('.payMonthlyDetails h2').text('Monthly Direct Debit Details');
	});
	$('.ddPayment').click(function() {
		$('.payAnnuallyDetails').hide();
		$('.payAnnually').hide();
		
		$('.payMonthlyDetails').show();
		$('.payMonthly').show();

		var monthlyPrice = $('.monthly .price').text();
		$('.paymentBreakdown p span.paymentBreakdownCal').text(annualPrice + " X 1");
	});
	$('.onePayment').click(function() {
		$('.payMonthlyDetails').hide();
		$('.payMonthly').hide();
		$('.annualPaymentCal').hide();

		$('.payAnnuallyDetails').show();
		$('.payAnnually').show();

		var annualPrice = $('.annual .price').text();
		$('.paymentBreakdown p span.paymentBreakdownCal').text(annualPrice);
	});
});



