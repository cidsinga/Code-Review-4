// Business Logic
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.totalCost = function(){
  this.toppings.forEach(function(toppings){
   this.price += 2;
    }
   if (this.size === twentyInch) {
          this.price += 15;
    }
    else if (this.size === twelveInch) {
          this.price += 10;
    }
        return this.price
});


// Front End Logic
$(document).ready(function(){
  $("#submitBtn").submit(function(event){
    event.preventDefault();
    var sizeInputs = $(size).val();
    var toppingsInputs = $("#toppings : checked");
    var toppingsArray = [];
    toppingInputs.forEach(function(toppingInput){
      toppingsArray.push(toppinginput.val());

    });

    var pizzaPizza = new Pizza(toppings, size);
    var price = pizzaPizza.getPrice();


  })
});
