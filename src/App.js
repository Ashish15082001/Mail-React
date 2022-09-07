import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import LeftPanel from "./components/left panel/LeftPanel";
import MidPanel from "./components/mid panel/MidPanel";
import RightPanel from "./components/right panel/RightPanel";

function App() {
  const navigate = useNavigate();

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
      <Route path="/" element={<Navigate to="/inbox" />}></Route>
      <Route
        path="*"
        element={
          <div>
            <h1>invalid url</h1>
            <button onClick={() => navigate("/inbox")}>go to inbox</button>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
