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

 //create variables to reference in my checked functions below
 //Using the name attribute I could distingusih which checkbox I am referencing.
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
     //calculates total cost by adding and subtracting based on the change event
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
$('#payment option:first').hide();
$('div p:eq(0)').hide();
$('div p:eq(1)').hide();
$('#payment').val("credit card");
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
   
     //Validating Fields and returning true or false to determine which fields are invalid
      function nameValidation() {
        let nameRegex = /^([a-zA-Z ]){2,30}$/;
        if (!nameRegex.test($('#name').val())) {
            $('#name').removeClass('success').addClass('error');
         $('#name').prev().text('Name field is required.').css('color', 'red');
         return false;
         } else {
            $('#name').removeClass('error').addClass('success')
            $('#name').prev().text('Name:').css('color', '');
            return true;
     }
 }
 function emailValidation() {
    
  
    // Must be a valid email address
    let emailAdress = /^[^@]+@[^@.]+\.[a-z]+$/i;
      
    if (emailAdress.test($('#mail').val())) {
      $('#mail').removeClass('error').addClass('success');
      $('#mail').prev().text('Email:').css('color', '');
      
      return true;
    } else if ($('#mail').val() !== '') { 
      $('#mail').removeClass('success').addClass('error');
      $('#mail').prev().text('Email is Invalid').css('color', 'red');
      
    return false;
    } else {
      $('#mail').removeClass('success').addClass('error');
      $('#mail').prev().text('Email is Invalid.').css('color', 'red');
      
      return false;
    }
}
           
  function cardValidation(){
    let creditCard = /^\d{4}([\s-]*)\d{4}\1\d{4}\1\d{4}$/;
        
        
        if (creditCard.test($('#cc-num').val())) {
            $('#cc-num').removeClass('error').addClass('success');
            $('#cc-num').prev().text('Card Number:').css('color', '');
          return true;
        } else { 
            $('#cc-num').removeClass('success').addClass('error');
            $('#cc-num').prev().text('Invalid credit card number').css('color', 'red');
          return false;
        }
      }
      
      function zipValidation(){ 
        let zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
   
        if (zipCode.test($('#zip').val())) {
            $('#zip').removeClass('error').addClass('success');
            $('#zip').prev().text('Zip Code:').css('color', 'black');
          return true;
        } else {
            $('#zip').removeClass('success').addClass('error');
            $('#zip').prev().text('Invalid zip code').css('color', 'red');
          return false;
        }
      }
      
      function cvvValidation(){
        let cvvNumber = /^[0-9]{3}$/;
        if (cvvNumber.test($('#cvv').val())) {
            $('#cvv').removeClass('error').addClass('success');
            $('#cvv').prev().text('CVV:').css('color', 'black');
          return true;
        } else { 
            $('#cvv').removeClass('success').addClass('error');
            $('#cvv').prev().text('Invalid cvv number').css('color', 'red');
          return false;  
        }
      }
      
      
      function activityValidation() {
          if ($('.activities input:checked').length === 0) {  
            $('.activities legend').text('Please Select an Activity').css('color', 'red');
            return false;            
          } else {
            $('.activities legend').text('Register for Activities:').css('color', '');
            return true;
          }
      }

      //submit event function that will scroll to the top if errors exist
      $('form').on('submit', function(e){
        
        
        if ($('#payment').val() === 'credit card') {
          if(nameValidation() & emailValidation() & activityValidation() & cardValidation() & cvvValidation() & zipValidation()) {
            alert('Success!');
            return true;
          } else {
            e.preventDefault();
            $("html, body").animate({scrollTop: 0}, "slow");
            
            return false;
          }
        }  else {
            if (nameValidation() & emailValidation() & activityValidation()) {
              alert('Success!');
            } else {
              e.preventDefault();
              $("html, body").animate({scrollTop: 0}, "slow");
              alert('Please fill out all required fields marked in red.');
              
            }
           
        }
       
      }); 

   
