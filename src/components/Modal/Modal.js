import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Form from '../Form/Form';

const Wrapper = styled.div`
    position: fixed;
    padding: 30px 40px;
    right: 0;
    width: 30vw;
    height: 100vh;
    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, .3);
`;

const Modal = ({closeModalFn}) => (
    <Wrapper> 
        <Button onClick={closeModalFn} close></Button>
        <Form />
    </Wrapper>
);

export default Modal;