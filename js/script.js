$( document ).ready(function() {
    $('#name').focus();   
});



/*** 
 Create text field using jQuery
 place as the last element in field set by appendTo method
***/
$('<input/>')
    .attr({ type: 'text', id: 'other-title', placeholder: 'Your Job Role'})
    .appendTo('fieldset')
    .hide();


$('#title').on('click change', function(){
    const jobTitle = $('#title option:selected').val();  
    //alert(jobTitle);
    if (jobTitle == 'other'){
        
        $("#other-title").show();

    } else {

        $("#other-title").hide();
    }
});
