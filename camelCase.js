//SAME BUT WITH CALLBACKS//

const lotr = [
  "biLbO BaGGINS",
  "leGOLAs",
  "Frodo baGGins",
  "sAMwise GamGEe",
  "gAndAlf",
];

const copyArrAndChange = (arr, cb) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let newValue = cb(arr[i]);
    result.push(newValue);
  }
  return result;
};

const copyStrToCamelCase = (str) => {
  const splitStr = str.split(" ");
  let camelCaseStr = "";

  for (let x = 0; x < splitStr.length; x++) {
    let word = splitStr[x];
    word = word.toLowerCase();
    if (x !== 0) {
      word = word.charAt(0).toUpperCase(1) + word.slice(1);
    }
    camelCaseStr += word;
  }
  return camelCaseStr;
};
console.log(copyArrAndChange(lotr, copyStrToCamelCase));
