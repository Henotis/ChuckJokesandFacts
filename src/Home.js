import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [randomJoke, setRandomJoke] = useState([]);

  const fetchRandomNorris = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRandomJoke(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchRandomNorris(url)
  }, [])

  const { categories, created_at, value } = randomJoke;

  return (
    <article>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt={value}
      />
      <div>
        <button className="btn" onClick={() => fetchRandomNorris(url)}>
          Random Joke
        </button>
        <div className="card">
          <h2>Category: {categories}</h2>
          <h2>Joke: {value}</h2>
          <h2>Created on: {created_at}</h2>
        </div>
        <Link to="/categories" className="btn">
          Joke Categories
        </Link>
      </div>
    </article>
  );
};

export default Home;
