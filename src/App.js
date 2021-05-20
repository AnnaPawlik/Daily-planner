import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopPrioritetsView from './views/TopPrioritetsView/TopPrioritetsView';
import TasksView from './views/TasksView/TasksView';
import ShoppingListView from './views/ShoppingListView/ShoppingListView';
import NotesView from './views/NotesView/NotesView';
import './App.css';
import Header from './components/Header/Header';

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={TopPrioritetsView} />
            <Route path="/tasks" component={TasksView} />
            <Route path="/shoppinglist" component={ShoppingListView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
        </BrowserRouter>
    )
  }
};

export default App;
