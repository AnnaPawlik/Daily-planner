import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Title from '../Title/Title';

const Wrapper = styled.header`
    display: grid;
    align-items: start;
    padding: 30px 40px;
    grid-area: header;
    grid-template-rows: 1fr 3fr 1fr;
    background-color: #FFD829;
    justify-items: center;
    min-width: 200px;
`;

const Header = ({openModalFn}) => (
    <Wrapper>
        <Title>Daily planner</Title>
        <HeaderNavigation />
        <Button onClick={openModalFn}><FontAwesomeIcon icon={faPlus}/></Button>
    </Wrapper>
);

export default Header;