// Business Logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.totalCost = function(){
  // using bind instead of giving this.price or size new variable names
  this.toppings.forEach(function(toppings){
    this.price += 2;
  }.bind(this))
  if (this.size === "twentyInch") {
         this.price += 15;
   }
   else if (this.size === "twelveInch") {
         this.price += 10;
   }
   return this.price;
};


// Front End Logic
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var toppingsInputs = $(".toppings:checked").toArray();
    var toppingsArray = [];
    var sizeInputs = $(".size:checked").val();


    toppingsInputs.forEach(function(toppingInput){
      toppingsArray.push($(toppingInput).val());
    });

    var pizzaPizza = new Pizza(toppingsArray, sizeInputs);
    var price = pizzaPizza.totalCost();
    var finalToppings = toppingsArray.toString();
    $("#orderConfirmation").show();
    $("#total").text(price);
    $("#summary").text(finalToppings);
  });
});
