import React from "react";
import "../styles/App.css";

import MainWindow from "./widget/MainWindow/MainWindow";
import VersionOne from "./widget/VersionOne/VersionOne";

const App = () => {
  return (
    <div className="app">
      {/* <MainWindow /> */}
      <VersionOne />
    </div>
  );
};

export default App;
