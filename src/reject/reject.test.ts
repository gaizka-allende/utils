import reject, { areIterateeProsTheSame}  from './reject';

const users = [
  { 'user': 'barney', location: 'London', 'active': false },
  { 'user': 'fred', location: 'London', 'active': true },
  { 'user': 'james', location: 'New York', 'active': false },
  { 'user': 'jim', location: 'New York', 'active': true },
];

it('iteratee props are the same', () => {
  expect(areIterateeProsTheSame({ location: 'London', active: true },{ 'user': 'fred', location: 'London', 'active': true })).toEqual(true);
});

it('iteratee props are not the same', () => {
  expect(areIterateeProsTheSame({ location: 'London', active: false}, { user: 'barney', location: 'London', active: true })).toEqual(false);
});

it('return falsy sub array of elements', () => {
  expect(reject(users, { location: 'London', active: true })).toEqual([
  { 'user': 'barney', location: 'London', 'active': false },
  { 'user': 'james', location: 'New York', 'active': false },
  { 'user': 'jim', location: 'New York', 'active': true },
  ]);
});

