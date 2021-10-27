# Pure functions

The below function **manipulates a global variable outside the function.** The result of the function **is the variable**.

## Impure

```js
let num = 2;

function square() {
  num = num * num; 
  return num;
}

square();
```

## Pure

The result of **invoking the function** is the output.

```js
function square(num) {
  return num * num;
}

num(2);
```
