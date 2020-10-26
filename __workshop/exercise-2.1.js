// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const testGreeting = () => {
  return request("https://journeyedu.herokuapp.com/hello")
    .then((response) => {
      // console.log(JSON.parse(response));
      return JSON.parse(response);
    })
    .then((parsedResponse) => {
      // console.log(parsedResponse.data.text);
      return parsedResponse.data.text;
    })
    .catch((err) => console.log("Error: ", err));
};

testGreeting().then((result) => console.log(result));
