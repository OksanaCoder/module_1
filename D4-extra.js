/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/
const checkArray = function(n) {
    let sum = 0;
    let giveMeRandom = [];

    for(i = 0; i < n; i++) {
        giveMeRandom.push(Math.floor(Math.random() * 10)); 
        if (giveMeRandom[i] > 5) {
            sum += giveMeRandom[i]
        }
    }
    return sum;
}

console.log(checkArray(6));
/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
const shoppingCart = [
  {
      price: 200,
      name: 'orange',
      ID: 1,
      number: 120
  },
  {
    price: 190,
    name: 'lemon',
    ID: 1,
    number: 120
},
{
    price: 320,
    name: 'banana',
    ID: 1,
    number: 120
}
];

let shippingCartTotal = function(items) {
    let total = 0;
  for(i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
console.log(shippingCartTotal(shoppingCart));
/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of 
objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns 
the number of items in the shoppingCart.
*/
const shopingCart = [
    {
        price: 200,
        name: 'orange',
        ID: 1,
        number: 120
    },
    {
      price: 190,
      name: 'lemon',
      ID: 1,
      number: 120
  },
  {
      price: 320,
      name: 'banana',
      ID: 1,
      number: 120
  }
  ];

  let addToShoppingCart = function(objs){
    let newObj = new Object();
    objs.push(newObj);
  }
  console.log(addToShoppingCart(shoppingCart));
  console.log(shoppingCart.length);


/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number 
of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most 
expensive item in the array.
*/
const shoppingCart = [
  {
      price: 200,
      name: 'orange',
      ID: 1,
      number: 120
  },
  {
    price: 190,
    name: 'lemon',
    ID: 1,
    number: 120
},
{
    price: 320,
    name: 'banana',
    ID: 1,
    number: 120
}
];

let maxShoppingCart = function(items) {
  let maxPrice = 0;
  for (i =0 ; i < items.length; i++) {
     maxPrice = Math.max(items[i].price);
  }
  return maxPrice;
}
console.log(maxShoppingCart(shoppingCart));
/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you 
have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
const shopCart = [
    {
        price: 200,
        name: 'orange',
        ID: 1,
        number: 120
    },
    {
      price: 190,
      name: 'lemon',
      ID: 1,
      number: 120
  },
  {
      price: 320,
      name: 'banana',
      ID: 1,
      number: 120
  }
  ];

  let latestShoppingCart = function(arr) {
    return arr[arr.length - 1];
} 
 
console.log(latestShoppingCart(shopCart));
/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger 
than X three times in a row.
*/
let loopUntil = function(X) {

}

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. 
The function automatically skips non-numeric entries in the array.
*/
let average = function(arr) {
    return arr.reduce((a, b) => a + b / arr.length);
 }
 console.log(average([2, 23, 10, 6, 7]));
/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/


/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/
/* ****** EXTRA EXERCISES ****** */
/* WRITE YOUR CODE HERE */
/* EXERCISE 20
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/
/* WRITE YOUR CODE HERE */
/* EXERCISE 21
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
/* WRITE YOUR CODE HERE */