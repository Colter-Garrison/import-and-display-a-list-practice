import { plants } from './plants-data.js';
import { renderPlants } from './renderPlants.js';
import { mollusks } from './mollusks-data.js';
import { renderMollusks } from './renderMollusks.js';
import { insects } from './insects-data.js';
import { renderInsects } from './renderInsects.js';

const plantListEl = document.getElementById('plants');
for (let plant of plants) {
    const plantDiv = renderPlants(plant);
    plantListEl.append(plantDiv);
}

const molluskListEl = document.getElementById('mollusks');
for (let mollusk of mollusks) {
    const molluskDiv = renderMollusks(mollusk);
    molluskListEl.append(molluskDiv);
}

const insectListEl = document.getElementById('insects');
for (let insect of insects) {
    const insectDiv = renderInsects(insect);
    insectListEl.append(insectDiv);
}