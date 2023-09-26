import { useReducer } from "react";

interface State {
  count1: number;
  count5: number;
  count6: number;
}

interface CountAction {
  type: 'count1' | 'count5' | 'count6';
  payload: number;
}

const reducer = (state: State, action: CountAction) => {
  if (action.type === 'count1') {
    return {
      ...state,
      count1: state.count1 + action.payload,
    };
  } else if (action.type === 'count5') {
    return {
      ...state,
      count5: state.count5 + action.payload,
    };
  } else if (action.type === 'count6') {
    return {
      ...state,
      count6: state.count6 + action.payload,
    };
  }
  return state;
}

function CountComponent() {
  const [count, dispatch] = useReducer(reducer, {
    count1: 1,
    count5: 5,
    count6: 6,
  });

  const handleCount1 = () => {
    dispatch({ type: 'count1', payload: 1 });
  }
  const handleCount5 = () => {
    dispatch({ type: 'count5', payload: 5 });
  }
  const handleCount6 = () => {
    dispatch({ type: 'count6', payload: 6 });
  }

  return (
    <>
      <div>{count.count1}</div>
      <div>{count.count5}</div>
      <div>{count.count6}</div>
      <button onClick={handleCount1} className="btn btn-sm">Count1</button>
      <button onClick={handleCount5} className="btn btn-sm">Count5</button>
      <button onClick={handleCount6} className="btn btn-sm">Count6</button>
    </>
  );
}

export default CountComponent;
