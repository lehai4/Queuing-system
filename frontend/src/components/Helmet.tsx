import React, { useEffect } from "react";
import PropTypes from "prop-types";

type HelmetProps = {
  title: string;
  children: React.ReactNode;
};
const Helmet = (props: HelmetProps): JSX.Element => {
  document.title = "QUEUING_System - " + props.title;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
