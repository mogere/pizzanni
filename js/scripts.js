$(document).ready(function(){
    // $(".large-pizza").hover(function(){
    //     $(".large").fadeIn();
    //     $(".choice1").show();
    // }, function(){
    //     $(".choice1").hide();
    // });

    // $(".medium-pizza").hover(function(){
    //     $("#medium").fadeIn();
    //     $(".choice2").show();
    // }, function(){
    //     $(".choice2").hide();
    // });

    // $(".small-pizza").hover(function(){
    //     $("#small").fadeIn();
    //     $(".choice3").show();
    // }, function(){
    //     $(".choice3").hide();
    // });
    // function pizza(size, cost){
    //     this.size=size;
    //     this.cost=cost;
    // }
    
    $("#large").click(function(){
        total=total+1,200;
        $(".items").append('<tr class="item"><td> 1 Large Pizza</td><td>1,200</td></tr>')
    });
    $("#medium").click(function(){
        total=total+800;
        $(".items").append('<tr class="item"><td> 1 medium Pizza</td><td>800</td></tr>')
    });
    $("#small").click(function(){
        total=total+600;
        $(".items").append('<tr class="item"><td> 1 small Pizza</td><td>600</td></tr>')
    });

    
});
var total=0;
function appendTotal(){
    $(".items").append('<tr><td> Your total is:</td><td>total</td></tr>')
}
function addExtras(){
    var checkedValue = null;
    var crust = document.getElementsByName("crust");
    var toppings = document.getElementsByName("toppings");
       
        for(var i=0; crust[i]; i++){
            
             if(crust[i].checked){
                if (crust[i].value ==="crispy")
                    total=total+90;  
                else if (crust[i].value ==="stuffed")
                    total=total+70;    
                else if (crust[i].value ==="gluten")
                    total=total+70;                           
            }
            else 
            alert("Please enter your gender");        

    }
}