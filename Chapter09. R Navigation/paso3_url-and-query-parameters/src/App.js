import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Simplemente incluye todos los childrens
export default function App({ children }) {
  return <section>{children}</section>;
}

//Es obligatorio que la prop children este presente
App.propTypes = {
  children: PropTypes.node.isRequired
};

const param = "Desde el path variable";
//Crea una query string. En este caso con un solo parametro llamado msg
const query = new URLSearchParams({ msg: "Desde el query string" });

//Sino se especifica ningun children, incluirá una seccion con dos links
App.defaultProps = {
  children: (
    <section>
      <p>
        <Link to={`echo/${param}`}>Echo param</Link>
      </p>
      <p>
        <Link to={`echo?${query.toString()}`} query={query}>
          Echo query
        </Link>
      </p>
    </section>
  )
};
