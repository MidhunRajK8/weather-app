const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e881f88b6a89f717ff4c0cefeb56fb9f&query=" +
    latitude +
    "," +
    longitude;
  console.log("forcast funstioon " + url);

  request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback("Unable to connect to weatherstack",undefined);
    } else if (response.body.error) {
        callback("Unable to find results",undefined);
    } else {
        callback(undefined,
        {
            results: "It is currently " +
            response.body.current.temperature +
            " degrees out. It feels like " +
            response.body.current.feelslike +
            " degrees out.",
            location: response.body.location.timezone_id
        }
      );
    }
  });
};

module.exports = forecast;

// const url =
//   "http://api.weatherstack.com/current?access_key=e881f88b6a89f717ff4c0cefeb56fb9f&query=27.2046,77.4977";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weatherstack");
//   } else if (response.body.error) {
//     console.log("Unable to find results");
//   } else {
//     console.log(
//       "It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });
