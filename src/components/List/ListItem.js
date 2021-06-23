import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

const appear = keyframes`
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
`;

const InnerWrapper = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    position: relative;
    animation: ${appear} .5s ease;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .3);
    border-radius: 10px;
    width: 400px;
    margin: 40px;
`;

const StyledTitle = styled(Title)`
  padding: 10px;
  margin-top: 0;
  background-color: #FFD829;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ListItem = ({title, description, time}) => (
    <InnerWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Paragraph>{time}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <Button secondary>Remove</Button>
    </InnerWrapper>
);

ListItem.propTypes = { 
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ListItem;