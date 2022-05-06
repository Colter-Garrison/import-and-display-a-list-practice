// IMPORT MODULES under test here:
import { plants } from '../plants-data.js';
import { renderPlants } from '../utils.js';

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
