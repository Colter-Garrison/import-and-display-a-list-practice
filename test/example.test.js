// IMPORT MODULES under test here:
import { plants } from '../plants-data.js';
import { renderPlants } from '../utils.js';

const test = QUnit.test;

test('test plants data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plant"><img src="./assets/pacific-trillium.png"></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlants(plants[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
