export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "85acef3e68msh3982b0f75407cadp11a177jsn97b307d02a38",
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
