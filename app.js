// import functions and grab DOM elements
import { plants } from './plants-data.js';
// let state
const plantEl = document.getElementById('plants');
// set event listeners 
for (let plant of plants) {
    const plantDiv = renderPlants(plant);
    plantEl.append(plantDiv);
}
