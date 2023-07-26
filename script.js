// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){

        const pilotNameInput = document.getElementById("pilotName");
        const copilotNameInput = document.getElementsByName("copilotName");
        const fuelLevelInput = document.getElementsByName("fuelLevel");
        const cargoMassInput = document.getElementsByName("cargoMass");
        
        if(pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput === ''){
            alert("all fields are required")
            event.preventDefault();
        }
        
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
   
});