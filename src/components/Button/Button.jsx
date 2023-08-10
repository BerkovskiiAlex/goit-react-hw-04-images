import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onLoadMoreClick, disabled }) =>
  disabled ? null : (
    <ButtonStyled onClick={onLoadMoreClick}>Load More</ButtonStyled>
  );

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
