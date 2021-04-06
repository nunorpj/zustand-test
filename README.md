This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Zustand re-renders:

in this test i conclude that if we use zustand in a simply way like this:

```js
const counterA = useCounters((state) => state.counterA);
```

the component will only re-render id the counterA change.

if we wanted to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps

```js
const { counterA } = useCounters((state) => ({
  incCounterA: state.incCounterA,
  counterA: state.counterA,
}));
```

we will have re-renders every time we change the state of the store even if we didn't touch `counterA`.

to fix this we can pass the `shallow` equality function to tell zustand that we want the object to be diffed shallowly, like this:

```js
import shallow from "zustand/shallow";
```

```js
const { counterA } = useCounters(
  (state) => ({
    incCounterA: state.incCounterA,
    counterA: state.counterA,
  }),
  shallow
);
```
