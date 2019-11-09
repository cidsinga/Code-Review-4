// Business Logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}
console.log("hi");

Pizza.prototype.totalCost = function(){
  console.log(this.toppings);
  // using bind instead of giving this.price or size new variable names
  this.toppings.forEach(function(toppings){
    console.log(this.size);
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
      console.log("hey");
    var toppingsInputs = $(".toppings:checked").toArray();
    var toppingsArray = [];
    var sizeInputs = $("[name=size]").val();
    // trying stuff below

    toppingsInputs.forEach(function(toppingInput){  //each instead of forEach as it wasn't working
      toppingsArray.push($(toppingInput).val());

    });

    var pizzaPizza = new Pizza(toppingsArray, sizeInputs);
    var price = pizzaPizza.totalCost();
    console.log(price);
  });
});
