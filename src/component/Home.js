import Movie from "./Movie";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const featureUrl =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb74e2b5f3b5745878032d50f6d804c1&page=1";

  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=eb74e2b5f3b5745878032d50f6d804c1&query=";

  useEffect(() => {
    getMovies(featureUrl);
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      })
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(searchUrl + search);
      setSearch("");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <section className="form">
        <p>Search</p>
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="Type here to search for movies"
            type="search"
            value={search}
            className="search"
            onChange={handleChange}
          />
        </form>
      </section>

      <section className="container-content">
        {movies.length > 0 && (
          <>
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </>
        )}
      </section>
    </div>
  );
}

export default Home;
