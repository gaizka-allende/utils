import partition from './partition';

const users = [
  { user: 'barney',  active: true, location: 'London' },
  { user: 'fred',    active: true, location: 'New York' },
  { user: 'pebbles', active: false, location: 'London' }
];

it('splits array using property', () => {
  expect(partition(users, { location: 'London', active: true })).toEqual([
    [
      { user: 'barney',  active: true, location: 'London' },
    ],
    [
      { user: 'fred', active: true, location: 'New York' },
      { user: 'pebbles', active: false, location: 'London' }
    ]
  ])
});
