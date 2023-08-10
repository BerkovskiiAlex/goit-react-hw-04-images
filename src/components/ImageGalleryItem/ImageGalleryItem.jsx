import PropTypes from 'prop-types';

import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map((img, index) => (
        <ImageGalleryItemStyled key={img.id} onClick={() => onClick(index)}>
          <ImageGalleryItemImageStyled
            src={img.webformatURL}
            alt={img.largeImageURL}
          />
        </ImageGalleryItemStyled>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func,
};
