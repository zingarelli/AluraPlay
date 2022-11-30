async function getVideos() {
    const connection = await fetch('http://localhost:3000/videos');
    const data = await connection.json();
    return data;
}

export const apiConnection = {
    getVideos
}