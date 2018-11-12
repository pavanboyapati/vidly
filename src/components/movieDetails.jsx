import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return <h1>{`Movie Id: ${match.params.id}`}</h1>;
  }
}

export default MovieDetails;
