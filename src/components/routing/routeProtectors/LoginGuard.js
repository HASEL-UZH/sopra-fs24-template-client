import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * Another way to export directly your functional component.
 */
export const LoginGuard = props => {
  if (!localStorage.getItem("token")) {
    return props.children;
  }
  // if user is already logged in, redirects to the main /app
  return <Redirect to="/game"/>;
};

LoginGuard.propTypes = {
  children: PropTypes.node
}