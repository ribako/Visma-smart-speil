import logo from "./logo.svg";
import "./App.css";
import Joke from "./components/Joke";
import RedditJoke from "./components/RedditJoke";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <div className="flex-horizontal">
        <Weather style={{ margin: "20px" }} />
        <Joke />
      </div>
      <RedditJoke />
    </div>
  );
}

export default App;
