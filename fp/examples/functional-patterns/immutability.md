# Immutability

Immutability = not directly modifying data. Most array methods for example will directly modify the array. If your were in the React, Ember or Vue team in the last course. You've probably learned that you never want to change 'state' directly. This is the same principle.

## Mutability

The below code modifies the original `names` array. 

```js
let names = ['laurens', 'danny'];
names.push('student');
console.log(names)
```

So, when people want to manipulate data with functional patterns they usually use 'higher-order functions' because they return new arrays instead of modifying the original. 
