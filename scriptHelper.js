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
    
    let h2 = document.getElementById("launchStatus");
    list.style.visibility = "visible";
    

    if (fuelLevel < 10000 && cargoLevel > 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
            </ol>
            `
        console.log(list)
        
    } else if(fuelLevel < 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
            `
    } else if(cargoLevel > 10000){
        h2.textContent = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass too heavy for launch</li>
            </ol>
            `
    } else {
        h2.textContent = "Shuttle is Ready for Launch";
        h2.style.color = "rgb(65, 159, 106)";
        list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
            `
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
