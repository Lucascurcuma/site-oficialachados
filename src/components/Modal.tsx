import React, { useEffect, useRef } from 'react';
import { ModalProps } from '../types';

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  modalType = 'standard' 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className={modalType === 'standard' ? 'modal-content w-full sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3' : 'confirmation-modal-content w-full sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3'}>
        <span className="close-button" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;