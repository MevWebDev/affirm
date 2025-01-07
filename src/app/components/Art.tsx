import { ImageList, ImageListItem } from "@mui/material";

import { images } from "../../images";

function Art() {
  return (
    <ImageList cols={3} gap={8} variant="masonry">
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.src}
            alt={item.alt}
            loading="eager"
            width={item.width}
            height={item.height}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Art;
