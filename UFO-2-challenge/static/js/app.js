// Assign the UFO sighting data from data.js to a variable 
var ufoData = data;

// Select filter by date button 
var filterButton = d3.select("#filter-btn");






//Create a variable getting the table body
var tbody = d3.select("tbody");

//create a function to populate the table with unfiltered data upon loading
function datauponLoading(x) 
{
    tbody.html("");    
    //populate table with filtered UFO data
    x.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    }

//event handler for when the filter by date button is being clicked 
d3.select("#filter-btn").on("click", displayfilteredData);
/// execute function upon change of value 

var populateTable = (sighting) =>
{
    var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.State);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
}

function displayfilteredData() 

{
 
  let filteredData = ufoData;
   // Prevent the page from refreshing
   d3.event.preventDefault();
    tbody.html("");
   
    
    // Select the input element and get the raw HTML node
    var inputdateElement = d3.select("#datetime");
    var inputcityElement = d3.select("#city");
    var inputstateElement = d3.select("#State");
    var inputcountryElement = d3.select("#country");
    var inputshapeElement = d3.select("#shape");

    //check in console
    console.log(inputdateElement);

  
    // Get the value property of the input element
    var inputdateValue = inputdateElement.property("value");
    var inputdateKey = inputdateElement.attr("id");
    console.log(inputdateKey);
    console.log(inputdateValue);
    var inputcityValue = inputcityElement.property("value");
    var inputcityKey = inputcityElement.attr("id");
    console.log(inputcityValue);
    console.log(inputcityKey);
    var inputcountryValue = inputcountryElement.property("value");
    var inputcountryKey = inputcountryElement.attr("id");
    console.log(inputcountryValue);
    console.log(inputcountryKey);
    var inputstateValue = inputstateElement.property("value");
    var inputstateKey = inputstateElement.attr("id");
    console.log(inputstateValue);
    console.log(inputstateKey);
    var inputshapeValue = inputshapeElement.property("value");
    var inputshapeKey = inputshapeElement.attr("id");
    console.log(inputshapeValue);
    console.log(inputstateKey);
 /////////////////////////////////////////////

  var filteredObject = {};
  filteredObject[inputdateKey] = inputdateValue;
  filteredObject[inputcityKey] = inputcityValue;
  filteredObject[inputstateKey] = inputstateValue;
  filteredObject[inputshapeKey] = inputshapeValue;
  filteredObject[inputcountryKey] = inputcountryValue;

  if (inputdateValue) {
    filteredObject[inputdateKey] = inputdateValue;
  }
  else {
    delete filteredObject[inputdateKey]; 
  }

  if (inputcityValue) {
    filteredObject[inputcityKey] = inputcityValue;
  }
  else {
    delete filteredObject[inputcityKey]; 
  }

  if (inputstateValue) {
    filteredObject[inputstateKey] = inputstateValue;
  }
  else {
    delete filteredObject[inputstateKey]; 
  }

  if (inputshapeValue) {
    filteredObject[inputshapeKey] = inputshapeValue;
  }
  else {
    delete filteredObject[inputshapeKey]; 
  }

 if (inputcountryValue) {
    filteredObject[inputcountryKey] = inputcountryValue;
  }
  else {
    delete filteredObject[inputcountryKey]; 
  }

  console.log(filteredObject);

 Object.entries(filteredObject).forEach(([key, value]) => {


    filteredData = filteredData.filter(row => row[key] === value);
    console.log(filteredData);

  });



  datauponLoading(filteredData);
  }


datauponLoading(ufoData);
