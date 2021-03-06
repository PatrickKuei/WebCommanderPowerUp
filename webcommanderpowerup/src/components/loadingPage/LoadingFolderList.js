import React from "react";

import ContentLoader from "react-content-loader";

export default function LoadingFolderList() {
  const cardList = [];

  for (let i = 0; i < 8; i++) {
    cardList.push(
      <div key={i} className="col-3 card">
        <div className="folder__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="100px"
            fill="currentColor"
            className="folder__content__picture bi bi-folder"
            viewBox="0 0 16 16"
          >
            <path d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
          </svg>
          <div className="folder__content__picture-name card-body text-center">
            <h5 className="card-title">
              <ContentLoader
                speed={3}
                width={150}
                height={26}
                viewBox="0 0 150 26"
                backgroundColor="#dedede"
                foregroundColor="#7f7d9b"
              >
                <rect x="0" y="0" rx="3" ry="3" width="150" height="26" />
              </ContentLoader>
            </h5>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="folder-list row border-bottom overflow-auto">
      {cardList}
    </div>
  );
}
