---
title: "Throttling in JavaScript"
description: "What throttling is, why it is used, and how to implement it in JavaScript with setTimeout and with a time difference."
date: "2024-10-01"
author: "Sujith Gunasekaran"
tags: ["JavaScript", "Throttling", "Performance", "Web Performance", "Scroll Events", "Event Handling"]
medium: "https://medium.com/@sujithg1999/throttling-in-javascript-fde10f651f94"
---

## What is Throttling?

Throttling in JavaScript is a technique used to limit how often a function is called over time. It ensures that a function is executed only once every specified time interval, no matter how many times it's triggered.

Imagine you have a function that runs whenever a user scrolls a webpage. Without throttling, that function could be called hundreds of times in a few seconds, which can slow down performance. With throttling, you can control how often the function runs, like once every 200 milliseconds, keeping things running smoothly.

Throttling is commonly used for things like:

- Scroll events
- Resize events
- Button clicks, and many more

![Throttling diagram: while the user scrolls continuously the throttle function blocks execution, then the function executes after the delay in milliseconds](/image/writing/throttling-in-javascript-diagram.webp)

## Why Throttling?

Throttling can improve the performance and user experience of web pages by reducing the number of unnecessary or redundant operations. It can also reduce the server and browser load caused by too many requests or calculations.

## How to implement Throttling in JavaScript?

At a high level, throttling can be implemented using different approaches. The main goal of throttling is to control how often a function is allowed to execute within a specific time period. Two common techniques for implementing throttling are:

1. **Using `setTimeout`:** This method works by delaying the execution of a function and making sure it only runs at set intervals.
2. **Using Time Difference:** In this technique, you track the time between function calls and only allow the function to execute if a certain amount of time has passed since the last execution.

Let's explore both techniques with examples.

### Throttling with setTimeout

In this example, we'll use `setTimeout` to pause the function for a certain amount of time before allowing it to run again.

Here is an example of how to implement throttling using `setTimeout`:

```javascript throttle-settimeout.js
function throttle(func, delay) {
  let blockFunctionExecution = false;
  let timerId = null;

  return function (...args) {
    if (!blockFunctionExecution) {
      blockFunctionExecution = true;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
        blockFunctionExecution = false;
      }, delay);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scrolled!');
}, 200));
```

- The `throttle` function takes another function (`func`) and a delay (`delay`).
- It uses `setTimeout` to make sure that `func` can only be called once during the specified delay.
- Once the delay time is up, the function is called, and the timer is reset for the next interval.

### Throttling Using Time Difference

This technique works by tracking the last time a function was called and comparing it to the current time. If the difference between the two is greater than a specified delay, the function is executed.

Here is an example of how to implement throttling using time difference:

```javascript throttle-time-difference.js
function throttle(func, delay) {
  let last = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - last >= delay) {
      last = now;
      func(...args);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scrolled!');
}, 200));
```

- The `throttle` function tracks the last time (`last`) the function was executed.
- On every call, it checks if the time difference between the current time and `last` is greater than the specified delay.
- If enough time has passed, the function executes, and the `last` timestamp is updated.

## Conclusion

In this blog, we have seen what throttling is, why it is used, and how to implement it in JavaScript with two different approaches. The main goal of throttling is to reduce the number of function calls, which helps boost your webpage's performance.

I hope you found this blog helpful and learned something new about throttling in JavaScript. If you have any questions or feedback, please leave a comment below.

Thanks for reading! 😀
