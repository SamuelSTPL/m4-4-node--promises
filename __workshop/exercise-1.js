// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let allStrings = array.every((word) => typeof word === "string");
    if (allStrings) {
      let allCaps = array.map(
        (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
      );
      resolve(allCaps);
    } else {
      reject("It did not work");
    }
  });
};
const sortWords = (array) => {
  allSortedPromise = new Promise((resolve, reject) => {
    let allStrings = array.every((word) => typeof word === "string");
    if (allStrings) {
      resolve(array.sort());
    } else {
      reject("It did not work");
    }
  });
  return allSortedPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
