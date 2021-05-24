import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <h2>Daily planner</h2>
        <HeaderNavigation />
        <Button onClick={openModalFn}><FontAwesomeIcon icon={faPlus}/></Button>
    </header>
);

export default Header;