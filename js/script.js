$( document ).ready(function() {
    $('#name').focus();   
});

$("#other-title").hide();
//if other option is selected show text field 
$('#title').change(function(e){
    alert($(e.target).val());
    if (select == 'Other'){
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
    
});
