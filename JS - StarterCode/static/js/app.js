// Assign the UFO sighting data from data.js to a variable 
var ufoData = data;

// Select filter by date button 
var filterbydateButton = d3.select("#filter-btn");

// Select the form
var filterbydateForm = d3.select("#formdatetime");

//Create a variable getting the table body
var tbody = d3.select("tbody");

//event handler for the filter by date button
filterbydateButton.on("click", runFilterdate);
filterbydateForm.on("submit",runFilterdate);

function runFilterdate() 
{

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

    var filtereddateData = ufoData.filter(ufoData => ufoData.datetime === inputdateValue);
  
    //check in console for returned value in variable
    console.log(filtereddateData);

    //populate table with UFO data
    ufoData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    }

    
  
    // remove any children from the list to
    //list.html("");
  