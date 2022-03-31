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
filterButton.on("click", runfilteredData);
/// execute function upon change of value 


function runfilteredData() 
{
  var filteredData = ufoData;
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputdateElement = d3.select("#datetime");
    var inputcityElement = d3.select("#city");
    var inputstateElement = d3.select("#state");
    var inputcountryElement = d3.select("#country");
    var inputshapeElement = d3.select("#shape");

    //check in console
    console.log(inputdateElement)

  
    // Get the value property of the input element
    var inputdateValue = inputdateElement.property("value");
    var inputcityValue = inputcityElement.property("value");
    var inputcountryValue = inputcountryElement.property("value");
    var inputstateValue = inputstateElement.property("value");
    var inputshapeValue = inputshapeElement.property("value");
 
 
  //set filter values (date, city, state, country, shape)

  var filteredufoData = ufoData.filter(childufoData => ufoData.datetime === inputdateValue
                                                && ufoData.city === inputcityValue
                                                && ufoData.state === inputstateValue
                                                && ufoData.country === inputcountryValue
                                                && ufoData.shape === inputshapeValue      
    );
  

/////objects filter ****************THIS********************

  //check in console for returned value in variable
  console.log(filteredufoData);
  
  //populate table with filtered UFO data
  filteredufoData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

  }


datauponLoading(ufoData);
