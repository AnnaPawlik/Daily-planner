import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopPrioritetsView from './views/TopPrioritetsView/TopPrioritetsView';
import TasksView from './views/TasksView/TasksView';
import ShoppingListView from './views/ShoppingListView/ShoppingListView';
import NotesView from './views/NotesView/NotesView';
import './App.css';
import Header from './components/Header/Header';
import Modal from'./components/Modal/Modal';

class App extends React.Component {

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {

    const { isModalOpen } = this.state;

    return (
        <BrowserRouter>
          <Header openModalFn={this.openModal}/>
          <Switch>
            <Route exact path="/" component={TopPrioritetsView} />
            <Route path="/tasks" component={TasksView} />
            <Route path="/shoppinglist" component={ShoppingListView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal}/> }
        </BrowserRouter>
        
    )
  }
};

export default App;
