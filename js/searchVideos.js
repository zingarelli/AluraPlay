import { apiConnection } from './apiConnection.js';
import createPlaylist from './ShowVideos.js';

const searchBtn = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search]');

async function searchVideos(e) {
    const keyword = searchInput.value;
    const result = await apiConnection.searchVideosByKeyword(keyword);
    createPlaylist(result);
}

searchBtn.addEventListener('click', e => searchVideos(e));
searchInput.addEventListener('keypress', e => {
    if (e.key === "Enter") {
        e.preventDefault;
        searchBtn.click();
    }
});