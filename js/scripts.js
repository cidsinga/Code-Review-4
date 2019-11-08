// Business Logic

function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}
console.log("hi");
Pizza.prototype.totalCost = function(){
  this.toppings.forEach(function(toppings){
    this.price += 2;
   if (this.size === twentyInch) {
          this.price += 15;
    }
    else if (this.size === twelveInch) {
          this.price += 10;
    }
        return this.price;
});
};


// Front End Logic
$(document).ready(function(){
  $("#submitBtn").submit(function(event){
    event.preventDefault();
    var toppingsInputs = $("#toppings:checked");
    console.log(toppingsInputs);
    var toppingsArray = [];
    var sizeInputs = $("#size").val();

    toppingsInputs.forEach(function(toppingInput){
      toppingsArray.push(toppingInput.val());

    });
          console.log(toppingsArray);
    var pizzaPizza = new Pizza(toppingsArray, sizeInputs);
    var price = pizzaPizza.totalCost();
    console.log(price);
  });
});
