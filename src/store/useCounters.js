import create from "zustand";

const useCounters = create((set) => ({
  counterA: 0,
  counterB: 0,
  incCounterA: () => set((state) => ({ counterA: state.counterA + 1 })),
  incCounterB: () => set((state) => ({ counterB: state.counterB + 1 })),
}));

export default useCounters;
