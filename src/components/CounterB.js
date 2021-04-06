import shallow from "zustand/shallow";

import useCounters from "../store/useCounters";

const CounterB = () => {
  const { incCounterB, counterB } = useCounters(
    (state) => ({
      incCounterB: state.incCounterB,
      counterB: state.counterB,
    }),
    shallow
  );

  console.log("Rendered Counter B", counterB);

  return <button onClick={incCounterB}> B ++ </button>;
};

export default CounterB;
