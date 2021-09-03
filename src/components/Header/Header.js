import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import Title from '../Title/Title';
import addIcon from '../../assets/plus.svg';

const StyledButton = styled(Button)`
    padding: 25px 5px;
    background-image: url(${({icon}) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

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

const Header = ({openModalFn }) => (
    <Wrapper>
        <Title>Daily planner</Title>
        <HeaderNavigation />
        <StyledButton onClick={openModalFn} icon={addIcon}/>
    </Wrapper>
);

export default Header;