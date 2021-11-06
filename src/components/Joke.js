import { useState, useEffect } from "react";
import { api } from "../services/api";
import "./joke.css";

const Joke = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    handleFetch();
  }, []);
  const handleFetch = () => {
    return api
      .get("https://api.jokes.one/jod")
      .then((response) => {
        setJoke(response.data.contents.jokes[0].joke.text);
      })
      .catch(() => setJoke("Klarte ikke hente dagens spøk"));
  };
  return (
    <div className="box1 sb5">
      <h3>
        {joke}
        <br />- jokes.one
      </h3>
    </div>
  );
};

export default Joke;
