
window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){

        const pilotNameInput = document.getElementById("pilotName");
        const copilotNameInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");

      
        let list = document.getElementById("faultyItems")
        
        

    // validation  of data register in the intput

        if( pilotNameInput.value === "" || 
            copilotNameInput.value === "" || 
            fuelLevelInput.value === "" || 
            cargoMassInput.value === "" )
            {
                alert("all fields are required");
                
            }  else {
                    if (validateInput(pilotNameInput.value) != "Not a Number" ||    
                        validateInput(copilotNameInput.value) != "Not a Number" || 
                        validateInput(fuelLevelInput.value) != "Is a Number" || 
                        validateInput(cargoMassInput.value) != "Is a Number") 
                        {
                            alert("Make sure to enter a valid information for each field");
                        
                        } else {
                            formSubmission(document,list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value,cargoMassInput.value)

                        }
                
                    }
        
        event.preventDefault();

    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);

       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

    })
   
});