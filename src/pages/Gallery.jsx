import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    '/img/gallery1.webp', '/img/gallery2.webp', '/img/gallery3.webp', '/img/gallery4.webp',
    '/img/gallery5.webp', '/img/gallery6.webp', '/img/gallery7.webp', '/img/gallery8.webp',
    '/img/gallery9.webp', '/img/gallery10.webp', '/img/gallery11.webp', '/img/gallery12.webp',
    '/img/gallery13.webp', '/img/gallery14.webp', '/img/gallery15.webp', '/img/gallery16.webp',
    '/img/gallery17.webp', '/img/gallery18.webp', '/img/gallery19.webp', '/img/gallery20.webp',
    '/img/gallery21.webp', '/img/gallery22.webp', '/img/gallery23.webp', '/img/gallery24.webp',
    '/img/gallery25.webp', '/img/gallery26.webp', '/img/gallery27.webp', '/img/gallery28.webp'
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery__wrapper">
      <div className="container">
        <div className="outer__gallery">
          <div className="top__">
            <h2>Gallery</h2>
            <p>Take a look at our beautiful cottage and the stunning surroundings</p>
          </div>
          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery__item" onClick={() => openModal(image)}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
