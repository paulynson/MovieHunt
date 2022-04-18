
const imgUrl = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div>
      <div className="inner-content">
        <img
          src={
            poster_path
              ? imgUrl + poster_path
              : "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt={title}
        />
        <div className="inner-text">
          <p>{title}</p>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="overview">
          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
