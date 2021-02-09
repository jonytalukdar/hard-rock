const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', function () {
  const searchInput = document.getElementById('search-input').value;
  fetch(`https://api.lyrics.ovh/suggest/${searchInput}`)
    .then((response) => response.json())
    .then((data) => getSongsList(data));
});

const getSongsList = (data) => {
  data.data.forEach((songs) => {
    const title = document.getElementById('title');
    title.innerText = `${songs.title}`;
    const album = document.getElementById('album');
    album.innerText = `${songs.album.title}`;
  });
};
