import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    {
      columnLabel: "Title",
      path: "title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { columnLabel: "Genre", path: "genre.name" },
    { columnLabel: "Stock", path: "numberInStock" },
    { columnLabel: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, sortedColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortedColumn={sortedColumn}
        onSort={sortedColumn => onSort(sortedColumn)}
      />
    );
  }
}

export default MovieTable;
