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

$('#color option:selected').prepend().text("Please Select a T-shirt Theme");
$('#color option').hide();

// const jsPuns = $('#color option:contains(" + JS Puns + ")').val();
//     const jsShirts = $('#color option:contains(" + JS shirt + ")').val(); 

//tshirt design should match color
$('#design').on('change',function (){
    const selectTheme = $('#design option:selected').val();
    const color = $('#color option:selected').val();
    // const jsPuns = $('#color:contains(Puns)')
    // const jsShirts = $('#color:contains('JS shirt')').attr('selected', 'true');
    
    // const jsPuns = $('#design').val();
    // const iHeartJs = $('#design').val();
     
    if(selectTheme == 'js puns') {
        
        $('#color option:contains(Puns)').show();
        $('#color option:contains(JS shirt)').hide();
      


    } else if(selectTheme == 'heart js') {
            
        
        $('#color option:contains(JS shirt)').show();
        $('#color option:contains(Puns)').hide();


        
    } else {
        $('#color option').hide();
    }
 });

//  $('#design').on('change',function (){
//     const selectTheme = $('#design option:selected').val();
//     const color = $('#color option:selected').val();
//     const jsPuns = $('#color option:contains(JS Puns)').text();
//     const jsShirts = $('#color option:contains(JS shirt)').text();
    
//     // const jsPuns = $('#design').val();
//     // const iHeartJs = $('#design').val();
     
//     if(selectTheme == 'js puns') {
        

//         $('#color option').eq(0).next().next().show(jsPuns);
//         $('#color option').eq(3).next().next().hide(jsShirts);


//     } else if(selectTheme == 'heart js') {
        

//         $('#color option').eq(3).next().next().show(jsShirts);
//         $('#color option').eq(0).next().next().hide(jsPuns);
//     }
//  });

//$('#color').prepend({})

// $('#color').on('change',function (){
// // const punsShirts = $("#color option:selected").text(); 
// // alert(punsShirts);
// // const shirt = $('option[textf$="(JS Puns shirt only)"');
// // alert(shirt);
// })

