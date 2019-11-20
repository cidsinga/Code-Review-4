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

    let request = new XMLHttpRequest();
const url = `https://api.giphy.com/v1/gifs/translate?api_key=Ho7J61QsxL7wbzY2CXyPYUenr8U2ixum&s=pizza_the_hut`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
}

request.open("GET", url, true);
request.send();

const getElements = function(response) {
  $('#hut').attr("src", response.data.images.original.url);
}
  });
});
