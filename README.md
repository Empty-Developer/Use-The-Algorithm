<<<<<<< Updated upstream
# :bell: JavaScript Array Sorting


This project demonstrates basic JavaScript array sorting. The example shows how to sort an array of objects by the age property using the :orange_book: **Array.sort()** method.

### Initial data:
```javascript
const people = [
    { firstName: 'Jou', lastName: 'Khan', age: 34 },
    { firstName: 'Dorian', lastName: 'Khan', age: 15 },
    { firstName: 'Tammy', lastName: 'Smith', age: 43 },
    { firstName: 'Noor', lastName: 'Biles', age: 23 },
    { firstName: 'Sumatva', lastName: 'Chen', age: 14 },
];
```

### Sorting function:
=======
# :shipit: Selection Sort.

Selection sort itself is not particularly **fast** when considered from the perspective of its application in a program, but as an algorithm worth analyzing, it is quite interesting in this sense.

### findSmallest - Function to find the minimum index.

Now you see the function for finding the smallest element in an array. It works as a loop, comparing the first element to the next, then assigning it to the smallest element and storing its index in the smallestIndex variable. **It then returns the smallestIndex.**

```JavaScript
// Function for finding the minimum index
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
  }

  return smallestIndex;
};
```

### :shipit: function selectionSort(arr) {} - The main sorting function.

Then I create a _selection_ function or the main selectionSort() function, which I pass the unsorted array into.

```JavaScript
function selectionSort(arr) {}
```

### Analysis of the main function.

Let's move on to the analysis of this function.

1. smallestIndex takes the smallest index from the previous function.
2. smallestElement takes the minimum element using the method -

   :pushpin: An array is written: the splice method removes and moves the element to smallestElement

   :pushpin: (smallestIndex, 1)[0] - this notation means that it takes 1 element and puts the element with index 0

3. newArr.push(smallestElement) adds an element to a new array.

```JavaScript
for (let i = 0; i < length; i++) {

		/* It takes the smallest
    element with index. */
		let smallestIndex = findSmallest(arr)

		/* Method for removing a single element.
    [0] takes the element with index 0. */
		let smallestElement = arr.splice(smallestIndex, 1)[0]

		newArr.push(smallestElement) // Adds an element to a new array.
```

### The whole code.

Here you can see how it was written and what methods I used.

```JavaScript
const arr = [ 34, 6, 23, 76, 3, 6, 23, 6 ];

// Function for finding the minimum index
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
  }

  return smallestIndex;
};

function selectionSort(arr) {
  let newArr = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {

		/* It takes the smallest
    element with index. */
		let smallestIndex = findSmallest(arr)

		/* Method for removing a single element.
    [0] takes the element with index 0. */
		let smallestElement = arr.splice(smallestIndex, 1)[0]

		newArr.push(smallestElement) // Adds an element to a new array.
	}

  return newArr;
}



console.log(selectionSort(arr));
```

### Conclusion.
>>>>>>> Stashed changes

```javascript
people.sort(function(a, b) {
    if (a.age < b.age) {
        return -1;    
    } else if (a.age > b.age) {
        return 1;     
    } else {
        return 0;     
    }
});
```
### :bust_in_silhouette: Result of execution:
```
[
<<<<<<< Updated upstream
    { firstName: 'Sumatva', lastName: 'Chen', age: 14 },     
    { firstName: 'Dorian', lastName: 'Khan', age: 15 },
    { firstName: 'Noor', lastName: 'Biles', age: 23 },
    { firstName: 'Jou', lastName: 'Khan', age: 34 },
    { firstName: 'Tammy', lastName: 'Smith', age: 43 }     
]
=======
   3,  6,  6,  6,
  23, 23, 34, 76
]
```
>>>>>>> Stashed changes
