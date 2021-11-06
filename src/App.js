import logo from "./logo.svg";
import "./App.css";
import Joke from "./components/Joke";
import "./App.css";
import RedditJoke from "./components/RedditJoke";

function App() {
  return (
    <div className="App">
      <Weather />
      <Joke />
      <RedditJoke />
    </div>
  );
}

export default App;
