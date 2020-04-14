import React from "react";
import "./App.scss";
import Layouts from "./components/Layouts";
import Deploy from "./components/Deploy";

function App() {
  return (
    <div className="app content">
      <Layouts>
        <Deploy />
      </Layouts>
    </div>
  );
}

export default App;
