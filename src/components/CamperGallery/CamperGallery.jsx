import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import css from "./CamperGallery.module.css";

const CamperGallery = ({ images, isPreview = false }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const slides = images.map((img) => ({
    src: img.original,
    thumbnail: img.thumb,
  }));

  return (
    <section className={css.camper_gallery}>
      {isPreview ? (
        <img
          src={slides[0]?.thumbnail || "/default-image.jpg"}
          alt="Camper preview"
          className={css.previewImage}
        />
      ) : (
        <div className={css.gallery}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.thumbnail}
              alt={`Camper image ${index + 1}`}
              className={css.image}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />
    </section>
  );
};

export default CamperGallery;
