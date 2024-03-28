//Task-1

//Comparing Two JSON with same values in different order.

let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person" };

var a = JSON.stringify(obj1, Object.keys(obj1).sort());
var b = JSON.stringify(obj2, Object.keys(obj2).sort());
if (a === b) {
  console.log("The objects are equal");
} else {
  console.log("The objects are not equal");
}

//Task-2

// Printing the country flags from an URL

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i = i + 1) {
    console.log(result[i].flags.png);
  }
};

//Task-3

// Printing the country name, region, subregion and population.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i = i + 1) {
    console.log(
      "Country name:" + " " + result[i].name.common,
      "region:" + " " + result[i].region,
      "subregion:" + " " + result[i].subregion,
      "population:" + " " + result[i].population
    );
  }
};
