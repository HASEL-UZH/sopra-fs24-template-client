import {Navigate, Outlet} from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * Another way to export directly your functional component.
 */
export const LoginGuard = () => {
  if (!localStorage.getItem("token")) {
    return <Outlet />;
  }
  return <Navigate to="/game" replace />;
};

LoginGuard.propTypes = {
  children: PropTypes.node
}