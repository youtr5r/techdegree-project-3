$( document ).ready(function() {
    $('#name').focus();  
    
});

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

$('#design').find('option:first').hide();

// $('#design > option:first').hide();

$('#color').prepend('<option selected="selected">"Please Select a T-shirt Theme"</option>');
$('#color option').hide();

// const jsPuns = $('#color option:contains(" + JS Puns + ")').val();
//     const jsShirts = $('#color option:contains(" + JS shirt + ")').val(); 
$('#design').on('change',function (){
    
    if(($('#design option:selected').val() == 'js puns') || ($('#design option:selected').val() == 'heart js') ) {
        $('#color').show();
    } else {
        $('#color').hide();
    }
});
//tshirt design should match color
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

 

$('.activities :checkbox').click(function(){
    let sum = 0;
    $('.activities :checkbox:checked').each(function(index,element){
        switch(element.name){
            case "200": sum +=200;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
            case "100": sum +=100;
            break;
        }

    })
});

   
       
      
      //Hides paypal and bitcoin at first
      $( document ).ready(function() {
        $("#paypal-1").hide();
        $("#bitcoin-1").hide();
      $(".activities").append('<div class="col-6 col"><label for="cost">Total cost:</label><input id="cost" name="cost" type="text" disabled></div>'
      )
      });
      
      
      $(document).ready(function(){ 
        $('#payment').change(function(){
       
        //Hide / show credit card, paypal and bitcoin  
          //const paragraphs = $("p"); 
          //const paypal = $(paragraphs[0]); 
          //const bitcoin = $(paragraphs[1]);
      
          //console.log('#payment');
      
         if ($("#payment").val() === "credit card") {
            $("#credit-card").show();
            $("#paypal-1").hide();
            $("#bitcoin-1").hide();
        } else {
            $("#credit-card").hide();
        }
        if ($("#payment").val() === "paypal") {
            $("#paypal").show();
            $("#paypal-1").show();
            $("#bitcoin-1").hide();
        } else {
            $("#paypal").hide();
            }
      
        if ($("#payment").val() === "bitcoin") {
            $("#bitcoin").show();
            $("#bitcoin-1").show();
            $("#paypal-1").hide();
      
        } else {
            $("#bitcoin").hide();
        }
      
      });
      });
      
      /*Allow only numbers input*/
      
      function numbersOnly(event) {
        event.target.value = event.target.value.replace(/[^0-9]+/, '');
      };