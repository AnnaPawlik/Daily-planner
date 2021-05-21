import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <h2>Daily planner</h2>
        <HeaderNavigation />
        <Button onClick={openModalFn}>Add</Button>
    </header>
);

export default Header;