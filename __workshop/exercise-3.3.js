// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const { geocode } = require("opencage-api-client");
const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat}, ${lng}`,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      data = JSON.stringify(data);
      return JSON.parse(data).results[0].formatted;
    })
    .catch((error) => console.log("error", error.message));
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
