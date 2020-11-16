import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  const { title, year, director } = props;
  return (
    <div>
      <div>{title}</div>
      <div>{year}</div>
      <div>{director}</div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
};

export default Movie;
