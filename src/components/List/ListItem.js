import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Title from '../Title/Title';

const ListItem = ({title, description}) => (
    <li>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
    </li>
);

ListItem.propTypes = { 
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ListItem;