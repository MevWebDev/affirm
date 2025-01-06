import { ImageList, ImageListItem } from "@mui/material";

import { images } from "../../images";

function Art() {
  return (
    <ImageList cols={3} variant="masonry">
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item.src} alt={item.alt} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Art;
