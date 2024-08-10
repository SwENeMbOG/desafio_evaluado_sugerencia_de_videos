import { Multimedia } from './Multimedia.js';

export class Reproductor extends Multimedia {
    #id;

    constructor(id, url) {
        super(url);
        this.#id = id;
    }

    playMultimedia() {
        videoModule.setIframeSource(this.url, this.#id);
    }

    setInicio(tiempo) {
        const nuevaUrl = `${this.url}?start=${tiempo}`;
        videoModule.setIframeSource(nuevaUrl, this.#id);
    }
}

// IIFE
const videoModule = (function () {
    function setIframeSource(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    }

    return {
        setIframeSource
    };
})();
