import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/action";
import store from "./redux/store";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  document.title = "React Redux";

  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  const handleRedux = () => {
    dispatch(increaseCounter);
    // props.increaseCounter();
    // store.dispatch({
    //   type: "INCREMENT",
    //   payload: { name: "increaseCounter" },
    // });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Redux {newCount}</h1>
      <div className="card">
        <button onClick={() => dispatch(increaseCounter())}>
          count is {props.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//     name: state.counter.name,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
