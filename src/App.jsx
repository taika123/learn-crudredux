import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect } from "react-redux";
import store from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home/Home";

function App(props) {
  const dispatch = useDispatch();
  document.title = "React Redux";

  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <>
      <div className="App">
        <Home />
      </div>
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
