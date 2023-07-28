
window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){

        let pilotNameInput = document.getElementById("pilotName");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        
        if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput === "" ){
            alert("all fields are required");
            event.preventDefault();
        } else if (validateInput(pilotNameInput.value) != "Not a Number" || validateInput(copilotNameInput.value) != "Not a Number" || validateInput(fuelLevelInput.value) != "Is a Number" || validateInput(cargoMassInput.value) != "Is a Number"){
            alert("Make sure to enter a valid information for each field");
            event.preventDefault();
        }


    })

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

       const divPlanet = document.getElementById("missionTarget");
       divPlanet.innerHTML = addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

    })
   
});