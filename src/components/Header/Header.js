import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.wrapper}>
        <h2>Daily planner</h2>
        <HeaderNavigation />
        <Button>Add</Button>
    </div>
);

export default Header;
