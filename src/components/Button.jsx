import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Button = ({ src, param }) => {
  const history = useHistory();

  const pushParam = (param) => {
    history.push(`/story/${param}`);
  };

  return src ? (
    <Link to={src} className="button">
      <img src="/images/icons/YT-button.svg" />{" "}
    </Link>
  ) : (
    <Link className="button" onClick={() => pushParam(param)}>
      <img src="/images/icons/YT-button.svg" />
    </Link>
  );
};

export default Button;
