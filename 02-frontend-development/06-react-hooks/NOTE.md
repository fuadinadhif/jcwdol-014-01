# How React Works

## From Code to Web

## React Lifecycle

# What is Hooks in React?

# Why We Need Hooks?

# Most Commonly Used React Hooks

1. [useState](#usestate)
2. [useEffect](#useeffect)
3. [useId](#useid)
4. useRef
5. useContext
6. useReducer
7. useMemo
8. useCallback

## useState

`useState` is a React Hook that lets you add a [state variable](#state) to your component.

```js
import { useState } from "react";

function MyComponent() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1>{index}</h1>
      <button onClick={() => setIndex(index + 1)}>+</button>
    </div>
  );
}
```

### How to Write a State

useState provide us with a **state varibale** and a **state setter function** to update that variable.

To write a State, follow this steps:

1. Declare a state `import {useState} from 'react';`.
2. Create the state variable and the setter function.

   ```js
   const [index, setIndex] = useState(0);
   ```

   - `index` are the state variable.
   - `setIndex` are the setter function.
   - `useState(0)` used for initiate the state and its default value.

3. Utilize the setter function based on your need.
   ```js
   function handlerClick() {
     setIndex(index + 1);
   }
   ```

## useEffect

`useEffect` is a React Hook that lets you [synchronize a component with an external system](#synchronizing-with-effects).

### How to Write an Effect

1. Declare an Effect `import {useEffect} from 'react';`
2. Specify the Effect dependencies.

   ```js
   function App() {
     useEffect(() => {}, []);
   }
   ```

   The Array in the end of the function is dependency. It is called **Array Dependency**. Any state that you put inside it will trigger the Effect if the state value changes.

3. Add cleanup if needed. Why?:
   1. Preventing memory leaks.
   2. Avoiding stale data.

### Example

1. [Listening to a global browser event](https://codesandbox.io/p/sandbox/react-effect-listening-to-a-global-browser-event-xs9fng).
2. [Fetching data with Effects](https://codesandbox.io/p/sandbox/react-effect-fetching-data-with-effects-szg85m).

## useId

`useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

`id` has to be unique, we may render one component several times. If we hardcoded their `id`, they might clash. That's why wee use `useId`.

```js
import { useId } from "react";

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
```

## useRef

## useContext

## useReducer

## useMemo

## useCallback

# Rules of Hooks

# Custom Hooks

# Reference

## State

> **State** is a components memory.

Components is often dynamic because of user interaction. Like typing in form, clicking button, etc. Components need to "remember" things: the current input value, the current style or the current image.

In React, this kind of component-specific memory is called state.

Try playing with this [code](https://codesandbox.io/p/sandbox/react-state-9jptgl?file=%2Fsrc%2Findex.js).

The `handleClick` function inside the above code is updating the local variable. But two things prevent that change from being visible.

1. Local variables don't persist between render.
2. Changes to local variables won't trigger renders.

To update a component with a new data, we need two things to happen:

1. **Retain** data between renders.
2. **Trigger** React to render the components with new data (re-rendering).

The `useState` Hook provides those two things:

1. **A state variable** to retain data between renders.
2. **A state setter** function to update the variable and trigger React to re-render.

## Synchronizing with Effects

> **Effects** let you run some code after rendering so that your component will synchronize with some system outside of React.

What exactly is an **Effects**? Before getting into that, you need to be familiar with two types of logic inside React components:

1. **Rendering Code** (JSX)
2. **Event Handlers** (User Interactions)

Lets try to make an analogy out of it, try to imagine React components are like actors in a play.

1. **Rendering Code (JSX):** This is the script for the play. It defines what the actors say and do on stage (what the user sees). It should be clear and predictable, just like a script should be.
2. **Event Handlers (User Interactions):** These are like the actors reacting to cues from the audience (user clicks, form submissions). They can change the scene a bit (update state) based on the audience's actions.

Now, imagine a complex play:

- A scene requires a special effect (like rain) that can't be triggered by a single audience action.

This is where **Effects** come in:

- **Effects** are like stage managers who handle things behind the scenes based on what's happening on stage (rendering). They can't be part of the script itself, but they ensure things happen at the right time.

For example, in a ChatRoom component:

- **Rendering Code** shows the chat interface.
- **Event Handlers** might handle sending messages (user clicks a button).

But connecting to the chat server requires an Effect:

- It's not caused by a single user action.
- It needs to happen when the ChatRoom appears (after rendering).

**Effects** run after the scene is set (rendering) and ensure things like connecting to servers happen at the right time, separate from user interactions.
