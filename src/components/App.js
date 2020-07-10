import React from 'react';
import "../scss/styles.scss";
import RootRouter from './pages/rootRutes'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { getAllCourses } from '../redux/actionsCreators';
store.dispatch(getAllCourses())

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );

}

export default App;
