import eventHandler from "./eventListener.js"

document
  .querySelector("#brewery-search-button")
  .addEventListener("click", eventHandler.handleSearchButtonClick)

 