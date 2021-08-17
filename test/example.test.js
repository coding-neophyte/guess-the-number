
import { compareNumbers } from './utils.js';
const test = QUnit.test;

test('if guess equals correct return 1', (expect) => {

    const expected = 0;


    const actual = compareNumbers(3, 3);


    expect.equal(actual, expected);
});

const test2 = QUnit.test;

test2('if guess is higher correct return 1', (expect) => {

    const expected = 1;


    const actual = compareNumbers(5, 2);


    expect.equal(actual, expected);
});

const test3 = QUnit.test;

test3('if guess is lower than correct return -1', (expect) => {

    const expected = -1;


    const actual = compareNumbers(2, 3);


    expect.equal(actual, expected);
});
