$(document).ready(function(){
     
    $("#large").click(function(){
        total=total+1200;
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
   
});
var total=0;
var crust;
var toppings;
function appendTotal(){
    confirmDelivery();
    $(".items > tbody:last").last().append('<tr>' + 
    '<td>'+ 'Your total is:'+
    '</td>'+
    '<td>'+
    total+
    '</td>'+
    '</tr>')
    $("#checkout").attr("disabled", true);
    $("#large").attr("disabled", true);
    
}


function confirmDelivery(){
    var delivery = confirm("Do you want your Pizza delivered to you?");
    if(delivery){
        total=total+150;
        var location = prompt("Please enter your location");
        alert("Your pizza will be delivered to "+location + " at Ksh 150." );
    }
    document.getElementById("output").innerHTML = "The total cost for your order is: "+total+" Thank you for shopping with us.";
}

function extras(){
optionCrust = document.getElementsByName("crust");
  for (var i = 0, length = optionCrust.length; i < length; i++)
  {
    if (optionCrust[i].checked)
    {
      crust = optionCrust[i].value
      
    break;
    }
    alert("you have chosen the " +optioncrust[i].id+" crust");
  }
  optionTopping = document.getElementsByName("topping");
  for (var i = 0, length = optionTopping.length; i < length; i++)
  {
    if (optionTopping[i].checked)
    {
      toppings = optionTopping[i].value
     
    break;
    }
    alert("you have chosen the " +optionTopping[i].id+" Topping");
  }
}