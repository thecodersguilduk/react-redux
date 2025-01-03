import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/actions';

const Counter = () => {
 //retrieve the current value of the state to use in the UI
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
