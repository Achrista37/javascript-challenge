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

//function to filter data according to our search criteria 

function displayfilteredData() 

{
 
  let filteredData = ufoData;
   // Prevent the page from refreshing
   d3.event.preventDefault();
    tbody.html("");
   
    
    // Select the input element and get the raw HTML node
    var inputdateElement = d3.select("#datetime");
    var inputcityElement = d3.select("#city");
    var inputstateElement = d3.select("#state");
    var inputcountryElement = d3.select("#country");
    var inputshapeElement = d3.select("#shape");

    //check in console
    console.log(inputdateElement);
    console.log(inputcityElement);
  
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
 
    //Create JS Object (key-value pair) key = the ID of the elements and the value is the user input

  var filteredObject = {};
  filteredObject[inputdateKey] = inputdateValue;
  filteredObject[inputcityKey] = inputcityValue;
  filteredObject[inputstateKey] = inputstateValue;
  filteredObject[inputshapeKey] = inputshapeValue;
  filteredObject[inputcountryKey] = inputcountryValue;

  // utilize if statements to delete fields that do not have any values

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

  // get the above JS object to filter our data

 Object.entries(filteredObject).forEach(([key, value]) => {


    filteredData = filteredData.filter(row => row[key] === value);
    console.log(filteredData);

  });

// put our filtered data into a table, displaying data that match our search criteria

  datauponLoading(filteredData);
  }


  // generate a table with all the original data upon loading the page
datauponLoading(ufoData);
