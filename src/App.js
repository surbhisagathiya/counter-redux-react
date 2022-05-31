import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/feactures/couterSlice";
// import Counter from "./components/counter";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const disPatch = useDispatch();
  return (
    <div className="App">
      <h1>Couter Application in ReduxSaga</h1>
      <button onClick={() => disPatch(increment())}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => disPatch(decrement())}>-</button>
    </div>
  );
}

export default App;
