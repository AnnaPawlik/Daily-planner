import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import shopIcon from '../../assets/shopping.svg';
import penIcon from '../../assets/pen.svg';
import taskIcon from '../../assets/clipboard.svg';
import topIcon from '../../assets/priority.svg';
import Button from '../Button/Button';

const LinksList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const ItemList = styled.li`
    font-size: 30px;
    padding: 10px;
`;

const ItemLink = styled(Button)`
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(${({icon}) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: transparent;
`;

const HeaderNavigation = () => (
    <nav>
        <LinksList>
            <ItemList>
                <ItemLink as={NavLink} to="/" icon={topIcon} />
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/tasks" icon={taskIcon} />
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/shoppinglist" icon={shopIcon} />
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/notes" icon={penIcon} />
            </ItemList>
        </LinksList>
    </nav>
);

export default HeaderNavigation;