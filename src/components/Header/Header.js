import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Title from '../Title/Title';

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <Title>Daily planner</Title>
        <HeaderNavigation />
        <Button onClick={openModalFn}><FontAwesomeIcon icon={faPlus}/></Button>
    </header>
);

export default Header;