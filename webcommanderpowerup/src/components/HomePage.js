import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import fileAPI from "../api/filesAPI";

import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";
import Main from "./Main";

function HomePage() {
  const [filesInfo, setFilesInfo] = useState({
    isLoaded: false,
    files: [],
    path: "",
    pathArray: [],
  });

  const [currentFolderId, setCurrentFolderId] = useState("root");

  console.log(currentFolderId);

  const initialFoldersInfo = () => {
    const res = fileAPI.getFoldersInfo();
    setFilesInfo({
      isLoaded: true,
      files: res.files,
      path: res.path,
      pathArray: res.path.split("\\"),
    });
  };

  useEffect(() => {
    initialFoldersInfo();
  }, []);

  return (
    <Fragment>
      {filesInfo.isLoaded ? (
        <FilesInfoContext.Provider
          value={{
            filesInfo,
            setFilesInfo,
            currentFolderId,
            setCurrentFolderId,
          }}
        >
          <div className="home-page container-fluid border overflow-hidden">
            <BreadCrumb />
            <div className="main row">
              <LeftNavbar />
              <Main />
            </div>
          </div>
        </FilesInfoContext.Provider>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </Fragment>
  );
}

export default HomePage;
