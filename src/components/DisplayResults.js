import useCounters from "../store/useCounters";

const DisplayResults = () => {
  const { counterA, counterB } = useCounters((state) => ({
    counterA: state.counterA,
    counterB: state.counterB,
  }));

  console.log("Rendered Display");

  return (
    <>
      <h3>results:</h3>
      <p>A: {counterA}</p>
      <p>B: {counterB}</p>
    </>
  );
};

export default DisplayResults;
