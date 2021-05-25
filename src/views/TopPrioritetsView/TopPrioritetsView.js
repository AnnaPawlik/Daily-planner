import React from 'react';
import styles from './TopPrioritetsView.module.scss';
import List from '../../components/List/List';

const TopPrioritetsView = () => (
    <div className={styles.wrapper}>
        <h2>TopPrioritetsView</h2>
        <List />
    </div>
);

export default TopPrioritetsView;