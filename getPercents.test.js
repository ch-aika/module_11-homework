//первый тест
const getPercents = require('./getPercents.js');

test('get percent 30 * 200 to equal 60', () => {
  const result = getPercents( 200, 30 )
  expect(result).toBe(60);
});

//corner-tests
const getPercents = require('./getPercents.js');

describe ('test exponentiation', () => {
  
  it ('get percent 30 * 0 to equal 1',() => {
  const result = getPercents( 0, 30 )
  expect(result).toBe(0);
}),
it ('get percent 30 * 200 to equal 60',() => {
  const result = getPercents( 0, 0 )
  expect(result).toBe(0);
}),
it ('get percent 30 * 200 to equal 60',() => {
  const result = getPercents( 200, 30 )
  expect(result).toBe(60);
});
});


//unit-tests
import { getPercents } from './getPercents.js';

describe (blockName: 'tests for exponentiation function', blockFn: () => {
  
  it (testName: 'should operate correctly with percent = 0', fn: () => {
  expect(getPersents (0, 30)).toBe(expected: '0');
}),

it (testName: 'should operate correctly with both nums = 0', fn: () => {
  expect(getPersents (0, 0)).toBe(expected: '0');
}),

it (testName: 'should operate correctly with natural nums', fn: () => {
  expect(getPersents (200, 30)).toBe(expected: '60');
});
});
