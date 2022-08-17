import { useGlobalContext } from "./context";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const url = "https://api.chucknorris.io/jokes/random?category=";
  const { category } = useGlobalContext();
//   const [categorize, setCategorize] = useState("animal");

  const [joke, setJoke] = useState([]);

  const fetchCategory = async (url) => {
    try {
      const response = await axios(url);
      const data = response.data;
      setJoke(data);
    } catch (error) {}
  };

//   useEffect(() => {
//     fetchCategory(`${url}${categorize}`);
//   }, [categorize]);

  const { categories, created_at, value} = joke;

  return (
    <div>
      <div>
        <img
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
          alt=""
        />
      </div>

      {category.map((item, index) => {
        return (
          <button className="btn" onClick={() => fetchCategory(`${url}${item}`)} key={index}>
            {item}
          </button>
        );
      })}
      <div className="card">
        <h2>Category: {categories}</h2>
        <h2>Joke: {value}</h2>
        <h2>Created: {created_at}</h2>
      </div>

      <div>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </div>
  );
};

export default Categories;
