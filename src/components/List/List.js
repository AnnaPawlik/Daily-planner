import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.ul`
    width: 90vw;
    margin: 100px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
`;

const List = ({items}) => (
    <Wrapper>
        {items.map(item => (
            <ListItem key={item.name} {...item}/>
        ))}
    </Wrapper>
);

export default List;