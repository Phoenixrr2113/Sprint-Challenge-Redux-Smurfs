1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map
Array.filter
Array.conncat

Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events triggered by a user which sends an object with a type to redux reducer. the reducer receives the action type and then decides which logic to perform in order to update the state.
the store holds the state of the entire applcation. nothing can affect the state or change its properties without going through a reducer first.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application level state is the state of the entire application which manages every part of the app. the component level state only manage state for all of its children componets that cares about its state.

1.  What is middleware?

miiddleware are like enhancers that sits between our application and outside apis that lets you control how redux calls its functions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a async middleware that lets you return a function instead of just a plain object in redux.

it changes our action creators because now it dispatches different action based on the applications current state and let the rest of the application continue until it resolves its promise.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    small change
