import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MovieTable from "./movieTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortedColumn: { path: "title", order: "asc" },
    currentPage: 1,
    currentGenre: {},
    pageSize: 4
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ key: "1", name: "All Genres" }, ...getGenres()]
    });
  }
  getMoviesData() {
    const {
      pageSize,
      currentPage,
      currentGenre,
      sortedColumn,
      movies: allMovies
    } = this.state;
    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter(m => m.genre.name === currentGenre.name)
        : allMovies;
    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, movies: movies };
  }
  render() {
    const {
      pageSize,
      currentPage,
      currentGenre,
      sortedColumn,
      genres: allGenres
    } = this.state;

    const { movies, totalCount } = this.getMoviesData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={allGenres}
            selectedItem={currentGenre}
            onItemSelect={genre => this.handleSelectedGenre(genre)}
          />
        </div>
        <div className="col">
          {movies.length === 0 && <h2>There are no movies to show</h2>}
          {movies.length > 0 && <h2>There are {totalCount} movies to show</h2>}
          <MovieTable
            movies={movies}
            onDelete={id => this.handleDelete(id)}
            onLike={movie => this.handleLike(movie)}
            sortedColumn={sortedColumn}
            onSort={sortedColumn => this.handleSort(sortedColumn)}
          />
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            onPagination={page => this.handlePagination(page)}
          />
        </div>
      </div>
    );
  }
  handleSort = sortedColumn => {
    this.setState({ sortedColumn });
  };
  handleDelete = id => {
    const movies = this.state.movies.filter(movie => id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePagination = currentPage => {
    this.setState({ currentPage });
  };
  handleSelectedGenre = currentGenre => {
    this.setState({ currentGenre: currentGenre, currentPage: 1 });
  };
}

export default Movies;
