import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-3 py-0">
      <div>
        <span href="/" className="h1 text-white-50 text-decoration-none">
          {branding}
        </span>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
