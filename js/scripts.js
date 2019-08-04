//BUSINESS LOGIC CODE
var Orders = function(size,crust,toppings,number,addition){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = number;
    this.comment = addition;
}
// function resetInputs(){
//     $("#size").val("");
//     $("#crust").val("");
//     $("#toppings").val("");
//     $("#comment").val("");
//     $("#num").val("");
// }
// Orders.prototype.fullOrder = function (){
//     return this.amount + " " + this.size + ", " + this.crust + ", " + this.toppings + " and: " + this.comment;
// }
var toppingsArray = ["Ham, pineapple, Cheese","Bacon, shrimp, tomato sauce","Barbecue sauce, chicken","Taco toppings, picante sauce","Kale, ricotta, and sausage","Garlic and ranch, Garlic ranch sauce"];
var sizePrice,crustPrice,toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size,crust,toppings){ 
    if(size==="Small"){
        sizePrice = 5;
        if(crust==="Thin Crust"){
            crustPrice = 2;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Pan Crust"){
            crustPrice=3;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Deep Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Cheese Filled Crust"){
            crustPrice=10;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
    }
    else if(size==="Medium"){
        sizePrice = 10;
        if(crust==="Thin Crust"){
            crustPrice = 2;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Pan Crust"){
            crustPrice=3;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Deep Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Cheese Filled Crust"){
            crustPrice=10;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
    }
    else if(sizePrice==="Large"){
        sizePrice = 15;
        if(crust==="Thin Crust"){
            crustPrice = 2;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Pan Crust"){
            crustPrice=3;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Deep Crust"){
            crustPrice=4;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
        else if(crust==="Cheese Filled Crust"){
            crustPrice=10;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 5;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[4]){
                toppingsPrice = 8;
            }
            else if(toppings===toppingsArray[3] || toppings===toppingsArray[5]){
                toppingsPrice = 6;
            }
        }
    }
    var pricing = (sizePrice + toppingsPrice + crustPrice) * amount;
    console.log("pricing: "+pricing);
    totalPrice.push(pricing);
    console.log(totalPrice);
    for(var i=0;i<totalPrice.length;i++){
        sumTotal+=totalPrice[i];
        console.log("sum "+sumTotal);
    }
    return (sizePrice + toppingsPrice + crustPrice) * amount;
}

// UI LOGIC CODE
var pizzaSize,pizzaCrust,pizzaToppings,comments,amount;
$(document).ready(function(){
    $("#order").click(function(event){
        event.preventDefault();
        alert("Please enter a new order, if this was your last... select deliver or reservation to proceed to checkout");
        pizzaSize = $("#size").val();
        console.log(pizzaSize);
        pizzaCrust = $("#crust").val();
        console.log(pizzaCrust);
        pizzaToppings = $("#toppings").val();
        console.log(pizzaToppings);
        comments = $("#comment").val();
        console.log(comments);
        amount = $("#num").val();
        console.log(amount);
        
//         var newOrder = new Orders(pizzaSize,pizzaCrust,pizzaToppings,amount,comments);
//         // console.log(newOrder);

//         $("ol#ordered").append('<li><span>'+ newOrder.fullOrder() +'</span></li>');
//         $("ol#prices").append('<li><span>'+ "cost: " + price(pizzaSize,pizzaCrust,pizzaToppings) + "$" +'</span></li>');
//         resetInputs();
    });
//     $("#checkout").click(function(){
//         $(".hidden").show();
//         $("h4#total").append(" "+ sumTotal + "$.");
//     });
//     $("#chooseDeliver").click(function(event){
//         event.preventDefault();
//         alert("Delivery charge is 15$ charged after reception of pizza.")
//         $("#deliver").show();
//         $("#chooseReservation").hide();
//     });
//     $("#chooseReservation").click(function(event){
//         event.preventDefault();
//         alert("5$ Reservation charges will be added to your bill at the restaurant.")
//         $("#reserve").show();
//         $("#chooseDeliver").hide();
//     });
//     $("#submitDeliver").click(function(event){
//         event.preventDefault();
//         alert("your order will be delivered to your location");
//         $("#checkout").show();
//     });
//     $("#submitRes").click(function(event){
//         event.preventDefault();
//         alert("your table has been reserved.");
//         $("#checkout").show();
//     });
});