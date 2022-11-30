import { apiConnection } from "./ApiConnection.js";

const playlist = document.querySelector('[data-playlist]');

function createVideoCard(title, description, url, image) {
    const videoItem = document.createElement('li');
    videoItem.className = "videos__item";
    videoItem.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${image}" alt="thumb do vídeo">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `
    return videoItem;    
}

async function createPlaylist() {
    const videoList = await apiConnection.getVideos();
    videoList.forEach(video => playlist.appendChild(createVideoCard(video.titulo, video.descricao, video.url, video.imagem)));
}

createPlaylist();