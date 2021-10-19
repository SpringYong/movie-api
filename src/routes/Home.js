import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // axios.get 완료되기까지 시간이 조금 필요하기 때문에 await를 넣음
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // 더 깔끔한 코드 만들어줌
    return (
      <section className="container">
        {console.log(movies)}
        <div className="bg"></div>
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              {
                console.log(movies);
              }
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
