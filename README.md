# Quick Sort

I'd like to immediately answer a couple of questions I had while writing this code.

- :one: Will I use this code instead of the built-in sorting?

- :two: Can this code be improved?

- :one: :x: NO! The code is too outdated. It's certainly interesting from a programming perspective, and I might use its techniques in the future, but I doubt it's all that popular. And compared to the built-in sorting function, it's even slower.

- :two: :heavy_check_mark: YES! You can add the ability to allocate multiple threads, which will speed things up even more, but don't waste memory on this; it's better to allocate it for specific operations.

### Full code

The code works very interestingly. At the very least, using recursion sounds reasonable, as recursion is much faster than loops. However, my recursion contains errors, such as the use of two loops, which further reduces the reading speed. I could have written it without them, but then the code would have been even longer, which would have affected performance.

```JavaScript
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
	if (left >= right) { // Function exit case
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



function swap(arr, left, mainElement) { // Function - swap
	let temp = arr[left]
	arr[left] = arr[mainElement]
	arr[mainElement] = temp
}

quickSort(lengthArr, arr, left, right)
console.log(arr)
```

---

### Initial parameters

The main parameters need to be explained in more detail, as they are used to execute most of the code.

- Parameter let right = arr.length - 1 : serves to ensure that we do not go beyond the array boundaries.

- The let left = 0 parameter allows us to know where the start of the array is.

```JavaScript
const arr = [34, 6, 23, 76, 3, 6, 23, 6, 45, 2, 34, 45]

/* We take smaller
steps to avoid going
beyond the boundaries
of the array.
*/
let right = arr.length - 1

let left = 0
const lengthArr = arr.length
```

### Функция - quickSort

:cat: I'll try to explain it more simply.

The essence of the quickSort function is that it takes an array and divides it into two parts, that is, sorting works with two parts at once.

The first part (let's say the left one) starts to rearrange the elements with each other.

The second part (let's say the right one) does exactly the same as the left one.

In this construction, they sort the array, and since we have fewer iterations each time than in the first step, the sorting happens almost instantly.

```JavaScript
function quickSort(lengthArr, arr, left, right) {
	if (left >= right) { // Function exit case
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
```

### Function - swap

The swap function works very simply, it changes the element when we need to call it, that is, according to the condition - if the left element is less than or equal to the right one.

```JavaScript
function swap(arr, left, mainElement) { // Function - swap
	let temp = arr[left]
	arr[left] = arr[mainElement]
	arr[mainElement] = temp
}
```

### Conclusion

```
[
   2,  3,  6,  6,  6,
  23, 23, 34, 34, 45,
  45, 76
]

```

> > > > > > > Stashed changes
