$( document ).ready(function() {
    $('#name').focus();   
});


const color = $('')

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

$('#color option').prepend().text("Please Select a T-shirt Theme");
$('#color option').hide();

//tshirt design should match color
$('#design').on('change',function (){
    const selectTheme = $('#design option:selected').val();
    const color = $('#color option:selected').val();
    alert(color);
    alert(selectTheme);
    // const jsPuns = $('#design').val();
    // const iHeartJs = $('#design').val();
     
    if(selectTheme == 'js puns') {
        

        color.eq(0).next().next().show();
        color.eq(3).next().next().hide();


    } else if(selectTheme == 'heart js') {
        

        color.eq(3).next().next().show();
        color.eq(0).next().next().hide();
    }
 });


//$('#color').prepend({})

// $('#color').on('change',function (){
// // const punsShirts = $("#color option:selected").text(); 
// // alert(punsShirts);
// // const shirt = $('option[textf$="(JS Puns shirt only)"');
// // alert(shirt);
// })

