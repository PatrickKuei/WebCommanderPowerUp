const api = {
  getFoldersInfo: () => {
    //TODO: get folders info
    return {
      files: [
        {
          id: "C10CB365-44AA-4946-B8C5-FD4C8D007863",
          name: "桌面",
          subfolders: [
            {
              id: "D308875D-381A-4429-9721-4B950EC3C23C",
              name: "docs",
              subfolders: [],
            },
            {
              id: "8649561A-7EBF-40A1-BBE8-77B366ADC4AE",
              name: "ha_homes_wo",
              subfolders: [],
            },
            {
              id: "71634557-86BB-4300-87D0-4EC50C1C7BB3",
              name: "jspp",
              subfolders: [
                {
                  id: "43AC5825-6184-437C-A536-2C70E4D4F56A",
                  name: "configs",
                  subfolders: [],
                },
                {
                  id: "15833630-5E12-401C-A812-491C1C5566D1",
                  name: "output",
                  subfolders: [
                    {
                      id: "25200781-6965-49C8-87DE-85C19AAFF75C",
                      name: "20210107_a",
                      subfolders: [],
                    },
                    {
                      id: "61AC9C50-132E-4920-AA2E-BB140A975ACD",
                      name: "20210107_b",
                      subfolders: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      path:
        "C:\\GitRepo\\github\\WebCommanderPowerUp\\webcommanderpowerup\\src",
    };
  },

  getFilesByFolderId: (folderId) => {
    return {
      files: [
        {
          name: "subfolder1",
          id: "ICEH77Q75M03B1E8",
        },
        {
          name: "subfolder2",
          id: "WUXY06J41B76S2W8",
        },
        {
          name: "subfolder3",
          id: "GFGV54N62T08O0J9",
        },
        {
          name: "file1.exe",
          id: "LVBZ10L47D96Y9X9",
        },
        {
          name: "file2.jpg",
          id: "JUHV66A35H16Q8R5",
        },
        {
          name: "file4.doc",
          id: "ICE12SGZ7PZ3B1E8",
        },
      ],
    };
  },
};
export default api;
