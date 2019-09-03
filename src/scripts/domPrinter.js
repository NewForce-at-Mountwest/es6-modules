const domPrinter = {
    printBreweryList: function(breweryArray){
        document.querySelector("#brewery-output-container").innerHTML = ""
        breweryArray.forEach(singleBrewery => {
            // Select the container and print a brewery card to the container for each item in the array
            document.querySelector("#brewery-output-container").innerHTML += `<div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${singleBrewery.name}</span>
              <p>${singleBrewery.city}</p>
            </div>
          </div>`
        })
    }
}

export default domPrinter;