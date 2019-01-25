// Back to the coffee shop example!
// Define a couple of objects that represent coffee drinks
const latte = {
    price: 6.99,
    availableSizes: ["small", "medium", "large"],
    availableMilkTypes: ["normal", "almond", "soy"],
    calories: 200
}

const americano = {
    price: 1.99,
    availableSizes: ["small", "medium", "large"],
    calories: 0
}

const mocha = {
    price: 4.99,
    availableSizes: ["small", "medium", "large"],
    calories: 100,
    availableMilkTypes: ["normal", "almond", "soy"]
}

// Define a bigger object that represents the coffee shop as a whole
// It should have a property called "menu" that holds an array of the coffee drink objects we just made

const coffeeShop = {
    address: "100 Sesame Street",
    openHours: "6am to 6pm",
    name: "Joe's Joe",
    menu: [
       latte,
       americano,
       mocha 
    ]
}

// console.log(coffeeShop.address);
// console.log(coffeeShop["openHours"]);
// console.log(coffeeShop.menu[0]);

// How can we change the data in an object? Say we want to change the coffee shop's open hours? Or add something to the menu?

coffeeShop.openHours = "6am to 5pm";
console.log(coffeeShop);


// The current values in an object are called the object's "state". The state can change!

// ---------- LIGHTNING EXERCISE ONE ------------------------- //

// 1. Build three objects. Each one should represent an employee at the coffee shop.
// 2. Each employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteDrink
// - an array of drinks they know how to make


// function makeDrink(drinkParam){
//     console.log(`I made you this ${drinkParam}`);
// }

// makeDrink("latte");
// makeDrink("mocha");

const dale = {
    name: "Dale",
    startDate: "1/10/18",
    jobTitle: "Barista",
    payRate: "$7.25/ hour",
    favoriteDrink: "venti venti mocha latte with soy and whipped cream",
    knownDrinks: ["latte", "mocha", "mocha latte"],
    makeDrink: function(drinkParam){
        console.log(`${this.name} made you this ${drinkParam}`);
    }
}

dale.makeDrink("latte");
dale.makeDrink("mocha");

// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"

const ryan = {
    name: "Ryan",
    startDate: "1/10/18",
    jobTitle: "Barista",
    payRate: "$7.25/ hour",
    favoriteDrink: "cold brew",
    knownDrinks: ["latte", "mocha", "mocha latte", "Cold brew"],
    makeDrink: function(drinkParam){
        // return `Here's your ${drinkParam}`;
        let sentenceToReturn = "No Can Do!";
        for(let i = 0; i < this.knownDrinks.length; i++){
            if(this.knownDrinks[i] === drinkParam){
                sentenceToReturn = `Here's your ${drinkParam}`;
            }    
        }
        return sentenceToReturn;
    },
    learnNewDrink: function(newDrinkParam){
        this.knownDrinks.push(newDrinkParam);
    },
    changeName: function(newName){
        this.name = newName;
    }
}

const preparedLatte = ryan.makeDrink("latte");
console.log("This is prepared drink", preparedLatte);

ryan.makeDrink("soy latte");
// console.log("this is prepared soy latte", preparedSoyLatte);


ryan.learnNewDrink("macchiaogihagoieuroieur");
console.log(ryan);

const josh = {
    name: "Josh",
    startDate: "1/10/18",
    jobTitle: "Barista",
    payRate: "$7.25/ hour",
    favoriteDrink: "black coffe",
    knownDrinks: ["latte", "mocha", "mocha latte", "black coffee"]
}

const coffeeShopStaff = {
    fullTime: [dale],
    partTime: [josh, ryan],
}

console.log(coffeeShopStaff);


// 2. Build another object called coffeeShopStaff
// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.
// what behaviors can an employee take in the context of a coffee shop?

// Methods can also accept parameters!

// briefly discuss `this`
