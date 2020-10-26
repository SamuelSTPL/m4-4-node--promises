// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      console.log(parsedResponse);
      let lat = parseInt(parsedResponse.iss_position.latitude);
      let lng = parseInt(parsedResponse.iss_position.longitude);
      return { lat, lng };
    });
};

getIssPosition().then((res) => {
  console.log(res);
});

module.exports = { getIssPosition };
