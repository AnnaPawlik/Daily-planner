import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faShoppingCart, faStar, faTasks } from '@fortawesome/free-solid-svg-icons';

const LinksList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const ItemList = styled.li`
    margin-top: 20px;
    font-size: 30px;
    padding: 10px;

    &:hover {
        background-color: #fff;
        border-radius: 20%;
    }
`;

const ItemLink = styled.button`
    text-decoration: none;
    color: #000000;
`;

const HeaderNavigation = () => (
    <nav>
        <LinksList>
            <ItemList>
                <ItemLink as={NavLink} to="/"><FontAwesomeIcon icon={faStar}/></ItemLink>
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/tasks"><FontAwesomeIcon icon={faTasks}/></ItemLink>
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/shoppinglist"><FontAwesomeIcon icon={faShoppingCart}/></ItemLink>
            </ItemList>
            <ItemList>
                <ItemLink as={NavLink} to="/notes"><FontAwesomeIcon icon={faPen}/></ItemLink>
            </ItemList>
        </LinksList>
    </nav>
);

export default HeaderNavigation;