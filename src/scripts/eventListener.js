
import apiManager from "./apiManager.js"
import domPrinter from "./domPrinter.js"

const secretData = "555-555-3222"

// Define event listener for search button click
// 1. Add click event to #"brewery-search-button"
const eventHandler = {
    handleSearchButtonClick: function(){

        // When the user clicks the button, get the value of the brewery-search-input text box
        const inputValue = document.querySelector("#brewery-search-input").value;

        const formattedInput = inputValue.toLowerCase().replace(" ","_")
        apiManager.fetchBreweriesByState(formattedInput)
        .then(parsedBreweries => {
            domPrinter.printBreweryList(parsedBreweries)
        })


    }
}

export default eventHandler;



