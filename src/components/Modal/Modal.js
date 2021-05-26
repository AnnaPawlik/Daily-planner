import React from 'react';
import styles from './Modal.module.scss';
import Button from '../Button/Button';
import Form from '../Form/Form';

const Modal = ({closeModalFn}) => (
    <div className={styles.wrapper}> 
        <Button onClick={closeModalFn} className={styles.closeButton}></Button>
        <Form />
    </div>
);

export default Modal;