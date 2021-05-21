import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({closeModalFn}) => (
    <div className={styles.wrapper}> 
        <button onClick={closeModalFn} className={styles.closeButton}>X</button>
    </div>
);

export default Modal;