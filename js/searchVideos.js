import { apiConnection } from './apiConnection.js';
import createPlaylist from './ShowVideos.js';

const searchBtn = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search]');
const playlist = document.querySelector('[data-playlist]');

async function searchVideos(e) {
    const keyword = searchInput.value;
    try {
        const result = await apiConnection.searchVideosByKeyword(keyword);
        if (result.length !== 0) {
                createPlaylist(result);
        }
        else {
            playlist.innerHTML = `<h2 class="mensagem__titulo">Sorry, there are no videos about "${keyword}".</h2>`;
        }
    }
    catch(err) {        
        playlist.innerHTML = `<h2 class="mensagem__titulo">Sorry. The playlist could not be loaded.<br /><br />Please, contact the Support Team.</h2>`;
        console.log(err);
    }   
}

searchBtn.addEventListener('click', e => searchVideos(e));
searchInput.addEventListener('keypress', e => {
    if (e.key === "Enter") {
        e.preventDefault;
        searchBtn.click();
    }
});