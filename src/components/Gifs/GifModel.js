class GifModel {
    constructor(json) {
        this.id = json.id;
        this.url = json.url;
        this.title = json.title;
        this.username = json.username;
        this.embedUrl = json.embed_url;
        this.gif = json.images.preview_gif.url
    }
}

export default GifModel