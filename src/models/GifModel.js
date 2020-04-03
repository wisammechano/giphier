import BaseModel from "./BaseModel";

const size = "downsized";

class GifModel extends BaseModel {
  constructor(json) {
    super(
      json.id,
      json.images[size].url,
      json.title,
      json.username,
      json.url,
      json.embed_url,
      json
    );
    this.isGif = true;
  }
}

export default GifModel;
