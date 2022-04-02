// Assign the UFO sighting data from data.js to a variable 
var ufoData = data;

// Select filter by date button 
var filterbydateButton = d3.select("#filter-btn");

// Select the form
var filterbydateForm = d3.select("#formdatetime");

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

//event handler for the filter by date button
d3.select("#filter-btn").on("click", runFilterdate);

function runFilterdate() 
{
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputdateElement = d3.select("#datetime");

    //check in console
    console.log(inputdateElement)

  
    // Get the value property of the input element
    var inputdateValue = inputdateElement.property("value");
  
    //check in console below variables
    console.log(inputdateValue);
    console.log(ufoData);
    
    //set filter value (date)

    var filtereddateData = ufoData.filter(ufoSightings => ufoSightings.datetime === inputdateValue);
  
    //check in console for returned value in variable
    console.log(filtereddateData);
    
    //populate table with filtered UFO data
    filtereddateData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    }

  // as a default display all data from data.js in a table upon loading the main page
  datauponLoading(ufoData);