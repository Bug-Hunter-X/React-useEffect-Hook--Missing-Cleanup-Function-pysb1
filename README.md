# React useEffect Hook: Missing Cleanup Function

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function. This can lead to memory leaks and unexpected behavior, especially when dealing with asynchronous operations like fetching data.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows the corrected version with a proper cleanup function.

## Problem

The initial implementation fails to include a return function within the `useEffect` hook. This return function is crucial for cleaning up any side effects before the component unmounts or re-renders.  Without it, event listeners or subscriptions may remain active, potentially causing memory leaks or unexpected behavior.

## Solution

The solution involves adding a return function to the `useEffect` hook to clean up any side effects.  In this example, there are no specific side effects from the fetch itself that require cleanup, but including an empty function is a best practice and will prevent bugs in more complex scenarios. 