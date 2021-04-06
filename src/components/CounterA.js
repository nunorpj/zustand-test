import useCounters from "../store/useCounters";

const CounterA = () => {
  const incCounterA = useCounters((state) => state.incCounterA);

  console.log("Rendered Counter A");

  return <button onClick={incCounterA}> A ++ </button>;
};

export default CounterA;
