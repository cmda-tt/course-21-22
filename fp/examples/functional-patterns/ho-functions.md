# Higher-order functions

JavaScript has something unique. Instead of data types (values) such as `strings`, `numbers` etc. Functions are 'values' themselves. This makes it possible to assign them to another variable, or use in other functions. You call the latter 'higher order functions'. You use them for the **composition of your code**. 

## Map

`map` is probably the best higher-order function to demonstrate.

```js
const num= [1, 2, 3, 4, 5];
const newNum= num.map(i => i * 2); // [2, 4, 6, 8, 10]

console.log(num)
console.log(newNum)
```

`map` return a new array with the modified numbers.
