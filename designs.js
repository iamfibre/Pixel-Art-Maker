// Select color input
// Select size input


// Your code goes here!*/

 let color,height,width;
$("#sizePicker").submit(function(e){
    e.preventDefault();
    //call make grid()
    makeGrid();
});
function makeGrid() {
    $('tr').remove();
    //get Grid sizes
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    for (let r = 1; r <= height; r++) {
        $("#pixelCanvas").append('<tr id=table' + r + '></tr>');
        for (let c = 1; c <= width; c++) {
            $("#table" + r).append('<td></td>');
        }
    }
    $('td').click(function addColor(){
    //select your color value
    color = $('#colorPicker').val();        
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    });
}































// let color,height,width;
        
//         $("#sizePicker").submit(function(e){
//             e.preventDefault();
            
//             height = $("#inputHeight").val();
//             width = $("inputWeight").val();
            
//             //call make grid()
//             makeGrid(height, width);
//             });
//         function makeGrid(i,j){
            
//             $('tr').remove();

//             T="";
//             for(i=0;i<line;i++){
//                     var T =T+"<tr>";
//                     for(j=0;j<col;j++){
//                             T +="<td></td>";
//                     }
//                     T +="</tr>";
//             }
            // for(let i = 1; i<= height; i++){
                
            //    $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
            // for(var j=1 ; j<=width ;j++){
            //     $("#table" + i).append('<td></td>');
            // }    
            // }
        //     $('td').click(function addColor(){
        //         //select your color value
        //         color = $('#colorPicker').val();        
        //                     if($(this).attr('style')){
        //                         $(this).removeAttr('style');
        //                     }else{
        //                         $(this).attr('style', 'background-color:' + color);
        //                     }
        //                 });
        // }
// T="";
//             for(i=0;i<line;i++){
//                     var T =T+"<tr>";
//                     for(j=0;j<col;j++){
//                             T +="<td></td>";
//                     }
//                     T +="</tr>";
//             }