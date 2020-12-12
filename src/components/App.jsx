import React from "react";
import "../styles/App.css";

import MainWindow from "./widget/MainWindow/MainWindow";
import VersionOne from "./widget/VersionOne/VersionOne";
import VersionTwo from "./widget/VersionTwo/VersionTwo";
import VersionThree from "./widget/VersionThree/VersionThree";

const App = () => {
  return (
    <div className="app">
      {/* <MainWindow /> */}
      {/* <VersionOne /> */}
      {/*<VersionTwo /> */}
      <VersionThree />
    </div>
  );
};

export default App;
