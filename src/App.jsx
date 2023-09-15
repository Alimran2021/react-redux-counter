import "./App.css";
import Counter from "./components/Counter/Counter";
// import CounterList from "./components/CounterList/CounterList";

import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  // const counterList = [1, 2, 3];
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
