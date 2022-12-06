async function getVideos() {
    const connection = await fetch('http://localhost:3000/videos');
    if(connection.ok) {
        const data = await connection.json();
        return data;
    }
    else throw new Error(`Error connecting to the API. Response status: ${connection.status} - ${connection.statusText}`);
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
        }
    );
    if (!connection.ok) {
        throw new Error (`Error connecting to the API. Response status: ${connection.status} - ${connection.statusText}`)
    }
    const response = await connection.json();
    return response;
}

async function searchVideosByKeyword(keyword) {
    const connection = await fetch(`http://localhost:3000/videos?q=${keyword}`);
    if(connection.ok) {
        const data = await connection.json();
        return data;
    }
    else throw new Error(`Error connecting to the API. Response status: ${connection.status} - ${connection.statusText}`);
}

export const apiConnection = {
    getVideos, 
    postVideo,
    searchVideosByKeyword
}