import React from 'react';
import List from '../components/List/List';
import AppContext from '../context';

const TopPrioritetsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.priority}/>
        )}
    </AppContext.Consumer>
);

export default TopPrioritetsView;