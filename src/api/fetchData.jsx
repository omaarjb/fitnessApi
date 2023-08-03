export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b25c5981f7msh5c6efaa4ea37623p1436a0jsn51a5557c4f5d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const ytbOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "783b4d6f38mshcfdf1c0c4f2c8a0p1e4c34jsn4fe2e25f5097",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
