const request = require("request");

const geocode = (address, callback) => {
  const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWlkaHVuMTIzIiwiYSI6ImNramI4em9majA1eTAyeXAyZWc5eHc1NjYifQ.HtVx1aid7vVJosMwz5ahuQ&limit=1";
  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect location service", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find result Try another search key", undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
      });
    }
  });
};

module.exports = geocode;
