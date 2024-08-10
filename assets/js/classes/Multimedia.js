export class Multimedia {
    #url;

    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
