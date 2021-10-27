# Functional Patterns

Here are some examples of functional programming patterns. Each pattern contains an `.md` file with an in-depth explanation and additional resources.

* [Impure vs Pure functions](/examples/functional-patterns/impure.md)
* [Immutability](/examples/functional-patterns/immutability.md)
* [Higher-order functions](/examples/functional-patterns/ho-functions.md)
* [Composition](/examples/functional-patterns/composition.md)

## Programming paradigm
*Functional programming* is a [programming paradigm][paradigm]. A way to classify programming languages based on their features. JavaScript supports **multiple paradigms** but you'll probably use either imperative (object-oriented) or declarative (functional). Remember that functional programming are just a collection of  patterns and principles written with JavaScript.

## Output

In functional code, the output value of a function depends only on its arguments. This might sound a bit vague but in short, you don't want your code to have any **side-effects**. That is if something in your code modifies some state variable value(s) outside its local environment such as a function (scope).

```js
INPUT -> PROCESS -> OUTPUT
```

## Core principles

* Composing of functions. A function that operates on other functions, so limited side effects.
* No dependence on the state of the program. Such as global variables.
* The same input always gives the same output (purity).

## Additional Resources
[What is Functional Programming](https://www.sitepoint.com/what-is-functional-programming/) by Ali Spittel on Sitepoint.  
[Functional Programming in JavaScript](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) by MPJ on Youtube.  
[Functional Programming ](https://www.freecodecamp.org/learn) by freeCodeCamp on freeCodeCamp.org.  
[Array Cardio](https://www.youtube.com/watch?v=HB1ZC7czKRs) by Wes Bos on Youtube.

[paradigm]: https://en.wikipedia.org/wiki/Programming_paradigm
