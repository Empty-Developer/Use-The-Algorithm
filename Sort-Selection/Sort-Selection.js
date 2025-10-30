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

