import React from "react";
import "../styles/App.css";

import MainWindow from "./widget/MainWindow/MainWindow";
import VersionOne from "./widget/VersionOne/VersionOne";
import VersionTwo from "./widget/VersionTwo/VersionTwo";

const App = () => {
  return (
    <div className="app">
      {/* <MainWindow /> */}
      {/* <VersionOne /> */}
      <VersionTwo />
    </div>
  );
};

export default App;
