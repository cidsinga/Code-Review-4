function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.totalCost = function () {
  this.toppings.forEach(function(toppings){
      this.price += 2;
   if (this.size === large) {
          this.price += 15;
    } else if (this.size === small) {
          this.price += 10;
    }
        return this.price
});
