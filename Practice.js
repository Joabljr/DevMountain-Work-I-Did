var me = {
  name: "JJ",
  age: 27,
};

console.log(me);

var dog1 = {
  name: "doggo",
  color: "red",
  age: 10,
  goodboy: true,
};

console.log(dog1);

var goodValue = dog1.goodboy;
console.log(goodValue);

var colorValue = dog1["color"];
console.log("color");

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.//

var favoriteThings = [
  {
    band: "imagine dragons",
    food: "pizza",
    person: "me",
    book: "the Last Stand",
    movie: "avengers",
    holiday: "christmas",
  },
];

console.log(favoriteThings);

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

favoriteThings.car = "tesla";
favoriteThings.show = "arcane";
console.log(favoriteThings);

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

favoriteThings.food = "chicken nuggets";
favoriteThings.book = "harry potter";
console.log(favoriteThings);

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

var carDetails = {
  color: "red",
  make: "toyota",
  model: "tacoma",
  year: 1994,
};

var { color, make, model, year } = carDetails;
console.log(carDetails);

var { color, make, model, year } = carDetails;
console.log(color, make);

for (let key in carDetails) {
  console.log(key);
}

carDetails.added = true;
console.log(carDetails);
// delete carDetails.added; //

var leagueChamps = [
  {
    jinx: "zaun",
    vi: "zaun",
    viktor: "zaun",
  },
  {
    jayce: "piltover",
    caitlyn: "piltover",
    heimerdinger: "piltover",
  },
];
console.log(leagueChamps);

var leagueDuos = [
  {
    Piltover: "Vi",
    Zaun: "Jinx",
  },
  {
    Piltover: "Viktor",
    Zaun: "Jayce",
  },
  {
    Piltover: "Heimerdinger",
    Zaun: "Singed",
  },
];
console.log(leagueDuos);

class Regions {
  constructor(demacia, noxus) {
    this.demacia = demacia;
    this.noxus = noxus;
  }
}
const champRegions = new Regions("Garren", "Darius");
console.log(champRegions);

//CALLBACKS//

const checkDamage = (num, cb) => {
  if (num > 10) {
    cb(true);
  } else {
    cb(false);
  }
};

checkDamage(90, (bool) => {
  if (bool) {
    console.log("You did lots of damage!");
  } else {
    console.log("Youdid a little bit of damage");
  }
});

// .forEach//

let numArray = [0, 1, 2, 3, 4];
numArray.forEach(function (element, index) {
  console.log("${element} is at index ${index}");
});

//.map//

const mappedArr = numArray.map(function (num) {
  return (num += 2);
});

console.log(mappedArr);

//.filter//

const filteredArr = numArray.filter(function (element) {
  return element % 2 === 0;
});

console.log(filteredArr);

//.reduce//

const reduced = numArray.reduce(function (acc, curr) {
  return acc + curr;
});

console.log(reduced);

const newReduced = numArray.reduce((a, c) => {
  a + c;
}, 5);

console.log(newReduced); //undefined for me//

// Returning Functions //

console.log("practice more later");

// undefined for me //

// CHAINING METHODS //

const myNum = numArray
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc - curr);

console.log(myNum);

// ARRAR.FILTER(callback)//

let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter(function (element, index, array) {
  return element > 3;
});

console.log(newArr);

//ARRAY.REDUCE(callback)//

let newArrRed = arr.reduce(function (total, element, index, array) {
  return total + element;
});
console.log(newArrRed);

//ARRAY.MAP//

let newArrMap = arr.map(function (element, index, array) {
  return element + 2;
});

console.log(newArrMap);

//practicing map callback//

const colors = ["red", "blue", "yellow", "green", "orange"];

const pinkColor = colors.map(function (element, index, array) {
  return (element = "pink");
});

console.log(pinkColor);
console.log(colors);

//use .map to put "Hello," in the front of ever element //

const formalNames = ["Bernard", "elizabeth", "Conrad", "Mary Margaret"];

const formalGreeting = formalNames.map(function (element, index, array) {
  return "Hello, " + element;
});

console.log(formalGreeting);
console.log(formalNames);

//  CALLBACK TO FILTER ONLY STRINGS THAT START WITH A //
const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
];

const placesStartWithA = places.filter(function (city) {
  return city[0] === "A";
});

console.log(placesStartWithA);

// make a .filter for the array //

let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
  { programmer: "Bob" },
];

const programmerJobs = jobs.filter(function (jobs) {
  return jobs.programmer;
});

const designerJobs = jobs.filter(function (jobs) {
  return jobs.designer;
});

const receptionistJobs = jobs.filter(function (jobs) {
  return jobs.receptionist;
});

console.log(programmerJobs);
console.log(designerJobs);
console.log(receptionistJobs);

// .reduce to loop over the # parameter //

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = numsToReduce.reduce(function (
  total,
  element,
  index,
  array
) {
  return total * element;
});

console.log(numsToReduce);
console.log(productOfArray);

// pass a callback and initial val to reduce thaat sub in the array //

const budget = 2000;

const expenses = [
  {
    title: "rent",
    amount: 1000,
  },
  {
    title: "food",
    amount: 300,
  },
  {
    title: "food",
    amount: 300,
  },
];

const remaining = expenses.reduce((acc, cur) => acc - cur.amount, budget);

console.log(remaining);
