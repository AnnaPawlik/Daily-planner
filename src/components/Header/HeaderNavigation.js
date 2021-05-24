import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faShoppingCart, faStar, faTasks } from '@fortawesome/free-solid-svg-icons';

const HeaderNavigation = () => (
    <nav className={styles.nav}>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/"><FontAwesomeIcon icon={faStar}/></NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/tasks"><FontAwesomeIcon icon={faTasks}/></NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/shoppinglist"><FontAwesomeIcon icon={faShoppingCart}/></NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink className={styles.navItemLink} to="/notes"><FontAwesomeIcon icon={faPen}/></NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;