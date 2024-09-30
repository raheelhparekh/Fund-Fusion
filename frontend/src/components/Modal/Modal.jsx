import React from 'react';
import './Modal.css'


const Modal = ({onClose, children }) => {
    
    return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
       
    );
};

export default Modal;
