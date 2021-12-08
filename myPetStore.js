const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 300,
    basePrice: 9.99,
    displayPrice: 16.99,
  },
  {
    name: "cat sweater",
    colors: ["brown"],
    category: 4,
    inventory: 20,
    basePrice: 3.99,
    displayPrice: 1.99,
  },
];

console.log(catProducts);

const applyPercentDiscount = function (product, discount) {
  return (product.displayPrice = product.basePrice * (1 - discount));
};

const applyFlatDiscount = function (product, discount) {
  return (product.displayPrice = product.basePrice - discount);
};

const applyDiscount = function (arr, callback, discount) {
  return arr.forEach(function (element) {
    callback(element, discount);
  });
};

applyDiscount(catProducts, applyPercentDiscount, 0.5);
applyDiscount(dogProducts, applyPercentDiscount, 0.5);
console.log(catProducts);
console.log(dogProducts);

//sandwhiches//

function makeSandwhich(bread) {
  return function (ingredients) {
    let order = "you ordered a ${bread} sandwhich with:";

    for (let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length - 1 && i !== 0) {
        order += "and ${ingredients[i]},";
      } else if (ingredients.length === 1) {
        order += "${ingredients[i]}";
      } else {
        order += "${ingredients[i]},";
      }
    }
    return order;
  };
}

const makeWheatSandwhich = makeSandwhich("wheat");
const makeRyeSandwhich = makeSandwhich("rye");

console.log(makeRyeSandwhich(["bacon", "lettuce", "tomato"]));
