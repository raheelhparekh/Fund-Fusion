import React from 'react';
import './Modal.css'


const Modal = ({onClose, children }) => {
    return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-display" onClick={(e) => e.stopPropagation()}>
        <div className='modal-header p-2'>
          <button className="modal-close" onClick={onClose}>X</button>
        </div>
        <div className='modal-content'>
          {children}
        </div>
        
      </div>
    </div>
       
    );
};

export default Modal;
