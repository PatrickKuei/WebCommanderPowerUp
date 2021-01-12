import React, { useState } from "react";

import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";
import MainView from "./MainView";
import Toolbar from "./Toolbar";

import { PathContext } from "../contexts/PathContext";
import fileAPI from "../api/filesAPI";

function HomePage() {
  const fileInfo = fileAPI.getFileInfo();
  const files = fileInfo.files;
  const [path, setPath] = useState(fileInfo.path);

  return (
    <PathContext.Provider value={{ path, setPath, files }}>
      <div
        className="container-fluid border overflow-hidden"
        style={{ height: "70vh" }}
      >
        <BreadCrumb />
        <div className="row" style={{ height: "90%" }}>
          <LeftNavbar />
          <div className="col-10 border">
            <Toolbar />
            <MainView />
          </div>
        </div>
      </div>
    </PathContext.Provider>
  );
}

export default HomePage;