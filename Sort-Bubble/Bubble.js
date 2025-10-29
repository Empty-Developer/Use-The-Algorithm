const people = [
	{ firstName: 'Jou', lastName: 'Khan', age: 34 },
	{ firstName: 'Dorian', lastName: 'Khan', age: 15 },
	{ firstName: 'Tammy', lastName: 'Smith', age: 43 },
	{ firstName: 'Noor', lastName: 'Biles', age: 23 },
	{ firstName: 'Sumatva', lastName: 'Chen', age: 14 },
];

function bubbleSort(people) {
  let n = people.length;
  let swapped = false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if(people[j].age > people[j + 1].age) {
        let temp = people[j];
        people[j] = people[j + 1];
        people[j + 1] = temp;
        swapped = true
      }
    }
    if (!swapped) { // if the "swapped" state is true, we exit
      break;
    }
  };

  return people;
};


console.log(bubbleSort(people))

