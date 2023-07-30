// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   let divPlanet = document.getElementById("missionTarget");
    divPlanet.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${image}>
                ` 
}

function validateInput(testInput) {
   
    if(testInput == ""){
        return "Empty"
    } else if(!isNaN(testInput)) {
        return "Is a Number"
    } else {
        return "Not a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargotStatus = document.getElementById("cargoStatus")

    let h2 = document.getElementById("launchStatus");
    list.style.visibility = "visible";
    
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`

    if (fuelLevel < 10000 && cargoLevel > 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = "Fuel level too low for launch";
        fuelStatus.style.color="red"
        cargotStatus.textContent = "Cargo mass too heavy for launch";
        cargotStatus.style.color="red"
        
        
    } else if(fuelLevel < 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = "Fuel level too low for launch";
        fuelStatus.style.color="red"
        cargotStatus.textContent = "Cargo mass low enough for launch";
        cargotStatus.style.color="black"
        
    } else if(cargoLevel > 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = "Fuel level high enough for launch";
        fuelStatus.style.color="black"
        cargotStatus.textContent = "Cargo mass too heavy for launch";
        cargotStatus.style.color="red"
        
    } else {
        h2.textContent = "Shuttle is Ready for Launch";
        h2.style.color = "rgb(65, 159, 106)";
        fuelStatus.textContent = "Fuel level high enough for launch";
        fuelStatus.style.color="black"
        cargotStatus.textContent = "Cargo mass low enough for launch";
        cargotStatus.style.color="black"
        
    }
   
        
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {

    let planetPicked = planets[Math.floor(Math.random() * planets.length)];
    return planetPicked
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
