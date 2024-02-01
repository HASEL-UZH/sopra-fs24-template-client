import {Navigate, Route, Routes} from "react-router-dom";
import Game from "../../views/Game";
import PropTypes from "prop-types";

const GameRouter = props => {
  /**
   * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
   */
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Routes>

        <Route path="" element={<Game />} />

        <Route path="dashboard" element={<Game />} />

        <Route path="*" element={<Navigate to="dashboard" replace />} />

      </Routes>
    </div>
  );
};
/*
* Don't forget to export your component!
 */

GameRouter.propTypes = {
  base: PropTypes.string
}

export default GameRouter;
