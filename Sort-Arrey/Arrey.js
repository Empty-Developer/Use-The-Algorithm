const people = [
	{ firstName: 'Jou', lastName: 'Khan', age: 34 },
	{ firstName: 'Dorian', lastName: 'Khan', age: 15 },
	{ firstName: 'Tammy', lastName: 'Smith', age: 43 },
	{ firstName: 'Noor', lastName: 'Biles', age: 23 },
	{ firstName: 'Sumatva', lastName: 'Chen', age: 14 },
];

people.sort(function(a, b) {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
	} else {
    return 0;
  }
});

console.log(people);

