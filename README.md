# Bubble Sorting

In this case, I tested bubble sorting.

### Initial data:

#### The bubble sort algorithm can be described as follows.

The main stages of its work:

1. Comparison of adjacent array elements.
2. Swap them if they are in the wrong order.

### When considering the implementation of the algorithm, the following key points can be highlighted:

1. An array is passed to the sort function.

```javascript
function bubbleSort(people) {}
```

2. The logic of the algorithm is based on two nested loops.

The outer loop is bounded by N-1 (where N is the array size). This ensures that we don't exceed the array's bounds while traversing.

The inner loop uses the condition N - i - 1, where i is the current iteration of the outer loop. This means that on each subsequent pass, the algorithm examines one fewer element, since the largest elements have already "floated" to the end of the array and their placement has been determined.

```javascript
for (let i = 0; i < n - 1; i++) {
	for (let j = 0; j < n - i - 1; j++) {}
}
```

3. The final part of the code implements the procedure for exchanging elements if the current element is greater than the next one.

```javascript
let temp = people[j]
people[j] = people[j + 1]
people[j + 1] = temp
swapped = true
```

### The whole code

```javascript
const people = [
	{ firstName: 'Jou', lastName: 'Khan', age: 34 },
	{ firstName: 'Dorian', lastName: 'Khan', age: 15 },
	{ firstName: 'Tammy', lastName: 'Smith', age: 43 },
	{ firstName: 'Noor', lastName: 'Biles', age: 23 },
	{ firstName: 'Sumatva', lastName: 'Chen', age: 14 },
]

function bubbleSort(people) {
	let n = people.length
	let swapped = false

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (people[j].age > people[j + 1].age) {
				let temp = people[j]
				people[j] = people[j + 1]
				people[j + 1] = temp
				swapped = true
			}
		}
		if (!swapped) {
			// if the "swapped" state is true, we exit
			break
		}
	}

	return people
}

console.log(bubbleSort(people))
```

### Result of execution:

```
[

  { firstName: 'Sumatva', lastName: 'Chen', age: 14 },
  { firstName: 'Dorian', lastName: 'Khan', age: 15 },
  { firstName: 'Noor', lastName: 'Biles', age: 23 },
  { firstName: 'Jou', lastName: 'Khan', age: 34 },
  { firstName: 'Tammy', lastName: 'Smith', age: 43 }

]
```
