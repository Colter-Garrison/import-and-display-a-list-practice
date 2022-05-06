// import functions and grab DOM elements
import { plants } from './plants-data.js';
import { renderPlants } from './utils.js';
// let state
const plantListEl = document.getElementById('plants');
// set event listeners 
for (let plant of plants) {
    const plantDiv = renderPlants(plant);
    plantListEl.append(plantDiv);
}
