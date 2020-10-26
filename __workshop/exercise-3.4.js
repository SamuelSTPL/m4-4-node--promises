// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1");
const { get } = require("request-promise");

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  let issPosition = getIssPosition();
  // console.log(issPosition);
  let addressPosition = getPositionFromAddress(address);
  // console.log(addressPosition);
  return Promise.all([issPosition, addressPosition]).then(
    ([issPosition, addressPosition]) => {
      // console.log({ issPosition, addressPosition });
      return getDistance(issPosition, addressPosition);
    }
  );
};

getDistanceFromIss("Montreal").then((result) => console.log(result));
