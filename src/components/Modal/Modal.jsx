import React from 'react';
import PropTypes from 'prop-types';

// Импортируйте необходимые стилизованные компоненты
import { OverlayStyled, ModalStyled } from './Modal.styled';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <OverlayStyled onClick={this.onBackdropClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </OverlayStyled>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
