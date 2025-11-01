const arr = [34, 6, 23, 76, 3, 6, 23, 6, 45, 2, 34, 45]

/* We take smaller 
steps to avoid going 
beyond the boundaries 
of the array.
*/
let right = arr.length - 1

let left = 0
const lengthArr = arr.length

function quickSort(lengthArr, arr, left, right) {
	if (left >= right) {
		// Function exit case
		return
	}

	/* The Math function 
  rounds to the nearest 
  midpoint when dividing by 2.
  */
	let mainElement = Math.floor((left + right) / 2)

	const pivot = arr[mainElement]
	let i = left
	let j = right

	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}
		while (arr[j] > pivot) {
			j--
		}

		if (i <= j) {
			swap(arr, i, j)
			/* The swap function 
      call only works when the 
      left side is less than 
      or equal to the right side.
      */
			i++ // Add one step to the left
			j-- // We decrease the step on the right side
		}
	}

	// Recursion
	if (left < j) {
		quickSort(lengthArr, arr, left, j)
	}

	if (i < right) {
		quickSort(lengthArr, arr, i, right)
	}
}

function swap(arr, left, mainElement) {
	// Function - swap
	let temp = arr[left]
	arr[left] = arr[mainElement]
	arr[mainElement] = temp
}

quickSort(lengthArr, arr, left, right)
console.log(arr)
