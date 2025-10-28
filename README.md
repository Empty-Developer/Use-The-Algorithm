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
    { firstName: 'Sumatva', lastName: 'Chen', age: 14 },     
    { firstName: 'Dorian', lastName: 'Khan', age: 15 },
    { firstName: 'Noor', lastName: 'Biles', age: 23 },
    { firstName: 'Jou', lastName: 'Khan', age: 34 },
    { firstName: 'Tammy', lastName: 'Smith', age: 43 }     
]