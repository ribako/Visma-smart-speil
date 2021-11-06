import { jokes } from "../jokes/reddit/jokes";
import { JOKE2 } from "../jokes/reddit/index";
import "./index.css";
const RedditJoke = () => {
  return (
    <div
      className="joke"
      style={{
        float: "right",
        position: "absolute",
        bottom: "0",
        right: "0",
        margin: "20px",
      }}
    >
      <h1>{jokes[0].joke}</h1>
      <img src={JOKE2} style={{ height: "40vh" }} alt="joke" />
    </div>
  );
};

export default RedditJoke;
