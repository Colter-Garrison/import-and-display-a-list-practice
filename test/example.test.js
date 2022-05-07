// IMPORT MODULES under test here:
import { plants } from '../plants-data.js';
import { renderPlants } from '../renderPlants.js';
import { mollusks } from '../mollusks-data.js';
import { renderMollusks } from '../renderMollusks.js';
import { insects } from '../insects-data.js';
import { renderInsects } from '../renderInsects.js';

const test = QUnit.test;

test('test plants data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plant"><h1>Pacific Trillium</h1><img src="./assets/pacific-trillium.png"><p>Phylum: Tracheophyta, Class: Liliopsida, Order: Liliales, Family: Melanthiaceae, Genus: Trillium</p><h3>Commonly found in: </h3><ul><li>Oregon</li><li>California</li><li>Montana</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlants(plants[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test mollusks data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="mollusk"><h1>Pacific Banana Slug</h1><img src="./assets/banana-slug.png"><p>This mollusk is native to Oregon and can grow up to 25cm.</p><h3>Commonly found in: </h3><ul><li>Alaska</li><li>Oregon</li><li>California</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMollusks(mollusks[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test insects data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="insect"><h1>Western Honey Bee</h1><img src="./assets/honey-bee.png"><p>This insect is not native to Oregon. It was introduced and can grow up to 20mm.</p><h3>Commonly found in: </h3><ul><li>Africa</li><li>Asia</li><li>North America</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderInsects(insects[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});