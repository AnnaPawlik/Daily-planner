import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/">Top Prioritets</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/tasks">Tasks</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/shoppinglist">Shopping List</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/notes">Notes</NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;