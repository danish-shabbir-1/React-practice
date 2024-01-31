import "./App.css";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
      </>
    </Provider>
  );
}

export default App;
