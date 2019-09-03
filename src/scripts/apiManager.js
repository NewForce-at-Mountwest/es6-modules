// 1. Add click event to #"brewery-search-button"

document
  .querySelector("#brewery-search-button")
  .addEventListener("click", () => {
    console.log("You clicked the search button!");
    // 2. When the user clicks the button, get the value of the brewery-search-input text box
    const inputValue = document.querySelector("#brewery-search-input").value;
    

    const formattedInput = inputValue.toLowerCase().replace(" ","_")
    console.log("this is formatted input", formattedInput)

    fetch(`https://api.openbrewerydb.org/breweries?by_state=${formattedInput}`)
      .then(responseObject => {
        return responseObject.json();
      })
      .then(parsedBreweries => {
          parsedBreweries.forEach(singleBrewery => {
              console.log(singleBrewery.name, singleBrewery.city)
              // Select the container and print a brewery card to the container for each item in the array
              document.querySelector("#brewery-output-container").innerHTML += `<div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${singleBrewery.name}</span>
                <p>${singleBrewery.city}</p>
              </div>
            </div>`
          })
      });
  });
