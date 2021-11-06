import logo from "./logo.svg";
import "./App.css";
import Joke from "./components/Joke";
import RedditJoke from "./components/RedditJoke";
import Weather from "./components/Weather";


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
