# Composition

Make everything into a small function with a specific input and output. Then combine multiple functions in to something more complex.

## Example

Below is a good example taken from the Ali Spittel article on Sitepoint:

```js
const sum = arr => arr.reduce((i, runningSum) => i + runningSum);
const average = (sum, count) => sum / count;
const averageArr = arr => average(sum(arr), arr.length);
```

## Modules

Robert probably talked about modules. To cite [Sindre Sorhus][sindre] on this:

```
tl;dr You make small focused modules for reusability and to make it possible to build larger more advanced things that are easier to reason about.
```

*Just by creating modules and putting them in separate files doesn't necessarily mean that your functions are pure.*

## Utilities

Some developers like to make a seperation between modules and utilities. In short; utilities or helper functions can be re-used between different modules like a Matryoshka doll.

From the previous example you create a `averageArr.js` module that imports the `sum.js` and `average.js` utilities.

```
.
├── utilities
├── helpers
└── modules
```

[sindre]: https://github.com/sindresorhus/ama/issues/10
