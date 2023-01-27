const rl = require("readline-sync");
const foreCast = require("./Utils/forecast");
const geoCode = require("./Utils/geoCode");


const address = rl.question(
  "please Provide a Address to get a Forecast Report "
);

if (!address && address === "") {
  console.log("please provide a valid Address! Adress must not conatin empty string");
}else {
  console.log("Please wait....");
  //callback function chaining....
  geoCode( address, (error, data) => {
      if (error) {
        console.log(`Error :- ${error}`, error);
      } else {
        foreCast(data, (error, datas) => {
          if (error) {
            console.log(`Error :- ${error}`);
          } else {
            console.log("Weather : ", datas);
          }
        });
      }
    });
}



