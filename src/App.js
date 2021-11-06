import logo from "./logo.svg";
import "./App.css";
import Joke from "./components/Joke";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Joke />
      <Weather />
    </div>
  );
}

export default App;
