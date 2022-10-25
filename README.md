# Section #2 - intro to modern js

### Goal
This section represents an introduction to modern javascript concepts and patterns that will help us to write better, reusable and maintainable code. You will learn how to prepare your data before rendering it, how to write custom async functions and use modern javascript API such as observables.


### Tech plan
- Data transformation: filter, map, reduce, flat, flatMap / set / recursion / object clone / hashedObjects
- Async programming (Promise methods, async / await, micro-macro tasks)
- Observers: mutation / intersection vs window.scroll events
- Modern ESNext features
- Home Work: memoize / chain promises task

### Materials for the section
- Practice: array methods [link](https://www.w3schools.com/js/js_array_methods.asp)
- Read: difference between micro and macro tasks in JS. [link](https://javascript.info/event-loop)
- Read: promises [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Video Material
[Youtube link](https://www.youtube.com/watch?v=8aGmLc6EvSs)

### Section Playground
- Branch name: [`section-2-intro-to-js`](https://github.com/Softonix/softonix-incubator/tree/section-2-intro-to-js)
- Tag1: `#section-2-intro-to-js-start`
    - data-preparation.ts service with pre-made array transformation method
    - App.vue with default rendering example
    - intersection.ts service with pre-made window scroll listener
- Tag2: `#section-2-intro-to-js-end`
    - Implemented correct way of handling data-transformation via reduce
    - Migrated default data-preparation.ts service into async behaviour
    - Load data via Promise.all & Promise.allSettled methods
    - Implement error handling and loading states
    - Compare intersection observer vs scroll events via example
    - Introduce homework folder with tasks

### Homework
This section includes homework. You need to fork this repo, finish homework in your repo, push your changes to origin and send URL with your forked repo and completed task to related person.

- [Homework task1](https://github.com/Softonix/softonix-incubator/blob/section-2-intro-to-js/src/homework/homework-1-promises.js)
- [Homework task2](https://github.com/Softonix/softonix-incubator/blob/section-2-intro-to-js/src/homework/homework-2-memoize.js)
