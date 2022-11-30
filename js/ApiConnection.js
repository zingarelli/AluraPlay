async function getVideos() {
    const connection = await fetch('http://localhost:3000/videos');
    const data = await connection.json();
    return data;
}

async function postVideo(title, description, url, image) {
    const connection = await fetch(
        'http://localhost:3000/videos',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify({
                titulo: title,
                descricao: `${description} mil visualizações`,
                url: url,
                imagem: image
            })
        });
    const response = await connection.json();
    return response;
}

async function searchVideosByKeyword(keyword) {
    const connection = await fetch(`http://localhost:3000/videos?q=${keyword}`);
    const data = await connection.json();
    return data;
}

export const apiConnection = {
    getVideos, 
    postVideo,
    searchVideosByKeyword
}