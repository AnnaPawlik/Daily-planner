import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopPrioritetsView from './views/TopPrioritetsView';
import TasksView from './views/TasksView';
import ShoppingListView from './views/ShoppingListView';
import NotesView from './views/NotesView';
import GlobalStyle from '../src/theme/GlobalStyle';
import Header from './components/Header/Header';
import Modal from'./components/Modal/Modal';
import AppContext from './context';

class App extends React.Component {

  state = {
    priority: [],
    task: [],
    product: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
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
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return (
        <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <GlobalStyle/>
          <Header openModalFn={this.openModal}/>
            <Switch>
              <Route exact path="/" component={TopPrioritetsView} />
              <Route path="/tasks" component={TasksView} />
              <Route path="/shoppinglist" component={ShoppingListView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            { isModalOpen && <Modal closeModalFn={this.closeModal}/> }
        </AppContext.Provider>
        </BrowserRouter>      
    );
  }
};

export default App;
