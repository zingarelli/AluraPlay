import { apiConnection } from "./ApiConnection.js";

const form = document.querySelector('[data-form]');

async function addVideo(e) {
    e.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-title]').value;
    const image = document.querySelector('[data-image]').value;
    const description = Math.floor(Math.random() * 1000).toString();

    try {
        const response = await apiConnection.postVideo(title, description, url, image);    
        if (response) window.location.href = "../pages/envio-concluido.html";
    }
    catch (err) {
        const errorMsg = document.createElement('p');
        errorMsg.className = 'formulario__erro';
        errorMsg.textContent = 'Error sending the video. Please, contact Support Team.';
        form.insertBefore(errorMsg, form.children[form.children.length-1]);
        console.log(err);
    }
}

form.addEventListener('submit', e => addVideo(e))