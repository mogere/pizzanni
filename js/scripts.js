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
        alert(large.toppings());
    });
    $("#medium").click(function(){
        total=total+800;
        $(".items").append('<tr class="item"><td> 1 medium Pizza</td><td>800</td></tr>')
    });
    $("#small").click(function(){
        total=total+600;
        $(".items").append('<tr class="item"><td> 1 small Pizza</td><td>600</td></tr>')
    });

    var radioValue = $("input[name='crust']:checked").val();
    if(radioValue ==="crispy"){
        $(".items").append('<tr class="item"><td> Crispy crust</td><td>120</td></tr>')
    }
    else if (radioValue ==="stuffed"){
        $(".items").append('<tr class="item"><td> Crispy crust</td><td>150</td></tr>')
    }
    else if(radioValue ==="gluten"){
        $(".items").append('<tr class="item"><td> Crispy crust</td><td>130</td></tr>')
    }
    
});
var total=0;
var crust;
function appendTotal(){
    $(".items > tbody:last").append('<tr><td> Your total is:</td><td>total</td></tr>')
}

function pizza(size, cost, crust, toppings){
    this.size=size;
    this.cost=cost;
    this.crust=crust;
    this.toppings=toppings
}
function getCrust(){
    return crust=document.getElementsByName("crust");
}
function getToppings(){
   return toppings=document.getElementsByName("topping");
}
var large=new pizza("Large", 1,200, getCrust, getToppings);
var medium=new pizza("Medium", 800, getCrust, getToppings);
var small=new pizza("Small", 600, getCrust, getToppings);