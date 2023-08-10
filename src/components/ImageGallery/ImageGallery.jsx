import React from 'react';
import { PropTypes } from 'prop-types';
import { ImageGalleryStyled } from './ImageGalleryStyled';

export const ImageGallery = ({ children }) => {
  return <ImageGalleryStyled>{children}</ImageGalleryStyled>;
};

ImageGallery.propTypes = {
  children: PropTypes.object,
};
