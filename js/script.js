$( document ).ready(function() {
    $('#name').focus();  
    
});
//hide the textfield and make it show only when the other job role is selected
$('#other-title').hide();

$('#title').on('click change', function(){
    const jobTitle = $('#title option:selected').val();  
    //alert(jobTitle);
    if (jobTitle == 'other'){
        
        $("#other-title").show();

    } else {

        $("#other-title").hide();
    }
});
//hide the first option under select theme
$('#design').find('option:first').hide();
//add  new option at the beggining of the #color select dropdown box
$('#color').prepend('<option selected="selected">"Please Select a T-shirt Theme"</option>');
$('#color option').hide();

//Only show color options that match the theme name
//I did this by selecting it by text using literals
$('#design').on('change',function (){

    let selectTheme = $('#design option:selected').val();
    
    if(selectTheme == 'js puns') {
        //$('#color').show();
        $('#color option:contains(Puns)').show();
        $('#color option:contains(JS shirt)').hide();
      
    } else if(selectTheme == 'heart js') {
            
        $('#color option:contains(JS shirt)').show();
        $('#color option:contains(Puns)').hide();
        
    } else {
        $('#color option').hide();
    }
 });
 var mainConf = $('input[name="all"]');
 var jsFrameWork = $('input[name="js-frameworks"]');
 var javaScriptLib = $('input[name="js-libs"]');
 var expressWork = $('input[name="express"]');
 var nodeJsWork = $('input[name="node"]');
 var buildTools = $('input[name="build-tools"]');
 var npmWork = $('input[name="npm"]');
     /***
      Activities with conflicting times and days cannot be checked at the same time
      This works by disabling the checkbox for those activities if one is already checked
      ***/
 jsFrameWork.change(function () {
     if ($(this).prop("checked")) {
         expressWork.prop("disabled", true);
         expressWork.parent().addClass("disabled");
     } else {
         expressWork.prop("disabled", false);
         expressWork.parent().removeClass("disabled");
     }
 });
 javaScriptLib.change(function () {
     if ($(this).prop("checked")) {
         nodeJsWork.prop("disabled", true);
         nodeJsWork.parent().addClass("disabled");
     } else {
         nodeJsWork.prop("disabled", false);
         nodeJsWork.parent().removeClass("disabled");
     }
 });
 expressWork.change(function () {
     if ($(this).prop("checked")) {
         jsFrameWork.prop("disabled", true);
         jsFrameWork.parent().addClass("disabled");
     } else {
         jsFrameWork.prop("disabled", false);
         jsFrameWork.parent().removeClass("disabled");
     }
 });
 nodeJsWork.change(function () {
     if ($(this).prop("checked")) {
         javaScriptLib.prop("disabled", true);
         javaScriptLib.parent().addClass("disabled");
     } else {
         javaScriptLib.prop("disabled", false);
         javaScriptLib.parent().removeClass("disabled")
     }
 });
     //calculates total cost
 var totalCost = 0;
 
 $('.activities').append('<div id="total"></div>');
 var updateCost = function (cost) {
     totalCost += cost;
     document.getElementById("total").innerHTML = "Total: $" + totalCost;
 };  
 $('input[name="all"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(200);
     } else {
         updateCost(-200);
     }
 });
 $('input[name="js-frameworks"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 $('input[name="js-libs"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 $('input[name="express"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 $('input[name="node"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 $('input[name="build-tools"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 $('input[name="npm"]').change(function () {
     if ($(this).prop("checked")) {
         updateCost(100);
     } else {
         updateCost(-100);
     }
 });
 
 
//This code initially hides paypal and bitcoin paragraphs
$('#payment').find('option:first').hide();
$('div p:eq(0)').hide();
$('div p:eq(1)').hide();

//When payment type is selected it will show the matching payment info
$('#payment').on('change',function (){

  const payment = $('#payment option:selected').val();
  
  if(payment == 'paypal') {
      
      $('div p:eq(1)').show();
      $('#credit-card').hide();
      $('div p:eq(2)').hide();

  } else if(payment == 'bitcoin') { 
      $('div p:eq(2)').show();
      $('#credit-card').hide();
      $('div p:eq(1)').hide();   
  } else {
      $('#credit-card').show();
      $('div p:eq(1)').hide();
      $('div p:eq(2)').hide();
  }
});


 /***
  Select the following fields by ID
  Use the keyup function to gets the value from a textbox at every keypress
  if the values are correct it will alert success
  If values aren't correct it will show error
  e.g., credit card should be 16 digits. If it is not it can not be validated
  ***/
 $('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function (){
     if ( $(this).val() === "")  {
         $(this).removeClass('success');
         $(this).addClass('error');
     } else {
         $(this).removeClass('error');
         $(this).addClass('success');
     }
 });
      //created variables to validate input with RegEx
     var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
     var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
     var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
     var errorMessage ="";
     
     $('form').prepend('<p id="error-message"></p>');
     $('#error-message').hide();
     $('form').submit(function (e){
         e.preventDefault();
     
         if ( $('#name').val() === "" ) {
             console.log("Error!");
             $("html, body").animate({scrollTop: 0}, "slow");
             errorMessage = "<h2>Error!</h2> Please fill out all required fields.";
             $('#name').addClass('error');
             $('#name').focus();
         } else if ( !emailAddress.test($('#mail').val()) ) {
             $("html, body").animate({scrollTop: 0}, "slow");
             errorMessage = "<h2>Error!</h2> Please enter a valid email address.";
             $('#mail').focus();
         } else if ( $(".activities > label > input:checked").length === 0 ) {
             $("html, body").animate({scrollTop: 0}, "slow");
             errorMessage = "<h2>Error!</h2>Please select at least one activity.";
             $('.activities').focus();
         } else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
             errorMessage = "<h2>Error!</h2>Enter a valid credit card number.";
             $('#cc-num').focus();
         } else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
             errorMessage = "<h2>Error!</h2>Enter your zip code.";
             $('#zip').focus();
         } else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
             errorMessage = "<h2>Error!</h2>Enter a 3 digit CVV";
             $('#cvv').focus();
         } else {
             $("html, body").animate({scrollTop: 0}, "slow");
             errorMessage = "";
             alert("Success!");
         } 
         document.getElementById('error-message').innerHTML = errorMessage;
         $('#error-message').show();
     });
     