const searchSongs = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://api.lyrics.ovh/suggest/:${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
