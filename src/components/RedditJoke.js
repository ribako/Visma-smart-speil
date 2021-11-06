import { jokes } from "../jokes/reddit/jokes";
import { JOKE2 } from "../jokes/reddit/index";
import "./index.css";
const RedditJoke = () => {
  return (
    <>
      <div class="joke">
        <h1>{jokes[0].joke}</h1>
        <img src={JOKE2} alt="joke" />
      </div>
    </>
  );
};

export default RedditJoke;
