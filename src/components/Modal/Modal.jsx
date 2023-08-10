import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { OverlayStyled, ModalStyled } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <OverlayStyled onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>
  );
};

// export class Modal extends React.Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }

//   onBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <OverlayStyled onClick={this.onBackdropClick}>
//         <ModalStyled>{this.props.children}</ModalStyled>
//       </OverlayStyled>
//     );
//   }
// }

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
