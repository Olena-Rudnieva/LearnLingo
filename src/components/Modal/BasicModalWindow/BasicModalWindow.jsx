import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper } from './BasicModalWindow.styled';
import { CloseButton } from 'components/CloseButton/CloseButton';

const modalRoot = document.querySelector('#modal-root');

export const BasicModalWindow = ({ children, handleModalToggle }) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrapper>
        <CloseButton handleCloseModal={handleModalToggle} />
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};
