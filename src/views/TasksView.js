import React from 'react';
import AppContext from '../context';
import List from '../components/List/List';

const TasksView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.task} />
        )}
    </AppContext.Consumer>
);

export default TasksView;