import React from "react";
import "../styles/App.css";

import MainWindow from "./widget/MainWindow/MainWindow";
import VersionOne from "./widget/VersionOne/VersionOne";
import VersionTwo from "./widget/VersionTwo/VersionTwo";
import VersionThree from "./widget/VersionThree/VersionThree";
import VersionFour from "./widget/VersionFour/VersionFour";
import VersionSix from "./widget/VersionSix/VersionSix";

const App = () => {
  return (
    <div className="app">
      <MainWindow />
      <VersionOne />
      <VersionTwo />
      <VersionThree />
      <VersionFour />
      <VersionSix />
    </div>
  );
};

export default App;
