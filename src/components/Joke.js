import { useState, useEffect } from "react";
import { api } from "../services/api";

const Joke = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    handleFetch();
  }, []);
  const handleFetch = () => {
    return api
      .get("https://api.jokes.one/jod")
      .then((response) => {
        console.log(response);
        setJoke(response.data.contents.jokes[0].joke.text);
      })
      .catch(() => "Klarte ikke hente dagens spøk");
  };
  return <>{joke}</>;
};

export default Joke;
