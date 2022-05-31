import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h4>Couter</h4>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
