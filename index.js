// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    #dessert;  // Declaring the private field
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;  // Assigning value to the private field
    }
  }
  // Creating instances for Breakfast
let breakfast1 = new Breakfast("Pancakes", "Orange Juice");
let breakfast2 = new Breakfast("Omelette", "Coffee");

// Creating instances for Lunch
let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
let lunch2 = new Lunch("Greek Salad", "Chicken Soup", "Lemonade");

// Creating instances for Dinner
let dinner1 = new Dinner("Caesar Salad", "Minestrone Soup", "Steak", "Chocolate Cake");
let dinner2 = new Dinner("Garden Salad", "French Onion Soup", "Salmon", "Cheesecake");

// Displaying the instances
console.log(breakfast1);
console.log(breakfast2);
console.log(lunch1);
console.log(lunch2);
console.log(dinner1);
console.log(dinner2);
