import React from "react";
import LeftPanel from "./components/left panel/LeftPanel";
import MidPanel from "./components/mid panel/MidPanel";
import RightPanel from "./components/right panel/RightPanel";

function App() {
  return (
    <React.Fragment>
      <LeftPanel />
      <MidPanel />
      <RightPanel />
    </React.Fragment>
  );
}

export default App;
