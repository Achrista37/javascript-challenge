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

var populateTable = (sighting) =>
{
    var row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
}

function runfilteredData() 

{
 




  var filteredData = ufoData;
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
    console.log(inputdateValue);
    var inputcityValue = inputcityElement.property("value");
    console.log(inputcityValue);
    var inputcountryValue = inputcountryElement.property("value");
    console.log(inputcountryValue)
    var inputstateValue = inputstateElement.property("value");
    console.log(inputstateValue)
    var inputshapeValue = inputshapeElement.property("value");
    console.log(inputshapeValue)
 
 
  //set filter values (date, city, state, country, shape) and apply each filter individually to each category
  //store each filtered result in different variable 
  var filterBYDATE = ufoData.filter(data1 => ufoData.datetime === inputdateValue);
  console.log(filterBYDATE);
  var filterBYCITY = ufoData.filter(data2 => ufoData.city === inputcityValue);
  console.log(filterBYCITY);
  var filterBYSTATE = ufoData.filter(data3 => ufoData.State === inputstateValue);
  console.log(filterBYSTATE);
  var filterBYCOUNTRY = ufoData.filter(data4 => ufoData.country === inputcountryValue);
  console.log(filterBYCOUNTRY);
  var filterBYSHAPE = ufoData.filter(data5 => ufoData.country === inputcountryValue);
  console.log(filterBYSHAPE);
  var filterALL = ufoData.filter
                        (data6 => ufoData.datetime === inputdateValue
                        && ufoData.city === inputcityValue
                        && ufoData.state === inputstateValue
                        && ufoData.country === inputcountryValue
                        && ufoData.shape === inputshapeValue      
                        )
  console.log(filterALL)

  var resultdata = {filterALL, filterBYDATE, filterBYCITY, filterBYSTATE, filterBYCOUNTRY, filterBYSHAPE}
  if (resultdata.filterALL.length !== 0) {
    populateTable(filterALL);
  }
  else if (resultdata.filterALL.length === 0 && ((resultdata.filterBYCITY.length !== 0 || resultdata.filterBYDATE.length !== 0))){
    populate(filterBYCITY) || populate(filterBYDATE);

  }

  /*                      
  ufoData.filter(childufoData => ufoData.datetime === inputdateValue
                                                && ufoData.city === inputcityValue
                                                && ufoData.state === inputstateValue
                                                && ufoData.country === inputcountryValue
                                                && ufoData.shape === inputshapeValue      
    );
  */

/////objects filter ****************THIS********************

  //check in console for returned value in variable
  console.log(resultdata);
  
  //populate table with filtered UFO data

  

  }


datauponLoading(ufoData);
