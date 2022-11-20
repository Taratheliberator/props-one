import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import "./main.css";

export default function Stars({count}) {
  if (count < 1 || count > 5 || isNaN(+count)) {return};
  const starElements = new Array(count).fill(0).map((item, index) => (
    <Star key={index} />
  ));
  return (
    <ul className="card-body-stars u-clearfix">
      {starElements}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired
};