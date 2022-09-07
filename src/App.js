import React from "react";
import { Route, Routes } from "react-router";
import LeftPanel from "./components/left panel/LeftPanel";
import MidPanel from "./components/mid panel/MidPanel";
import RightPanel from "./components/right panel/RightPanel";

function App() {
  return (
    <Routes>
      <Route
        path="/:folder/:mailId"
        element={
          <React.Fragment>
            <LeftPanel />
            <MidPanel />
            <RightPanel />
          </React.Fragment>
        }
      ></Route>
      <Route
        path="/:folder"
        element={
          <React.Fragment>
            <LeftPanel />
            <MidPanel />
            <RightPanel />
          </React.Fragment>
        }
      ></Route>
    </Routes>
  );
}

export default App;
