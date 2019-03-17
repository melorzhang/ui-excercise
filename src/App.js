import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer.js';

import DataTableContainer from './components/DataTableContainer.js';
import ColumnSelectorContainer from './components/ColumnSelectorContainer.js';
import PaginationContainer from './components/PaginationContainer.js';
import SearchContainer from './components/SearchContainer.js';
import Panel from './components/Panel.js';

import logger from './reduxMiddleware/logger.js';

import './App.css';

const isProduction = process.env.NODE_ENV === 'production';

const store = isProduction
  ? createStore(reducer)
  : createStore(reducer, {}, applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="Content">
            <Panel header={'Control Panel'} defaultIfShow={true}>
              <SearchContainer />
              <hr />
              <ColumnSelectorContainer />
            </Panel>
            <PaginationContainer />
            <DataTableContainer />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
