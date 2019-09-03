const apiManager = {
    fetchBreweriesByState: function(searchQuery){
        return fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchQuery}`)
          .then(responseObject => {
            return responseObject.json();
          })
    }
}

export default apiManager;