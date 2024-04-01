type State = { value: number };
type Action = { type: string };

const initialCounter: State = { value: 0 };

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      throw new Error("Unknown action.");
  }
}

export { counterReducer, initialCounter };
