import React from 'react';
import "../scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './organisms/header';
import Banner from './organisms/banner.jsx';
import Curses from './pages/curses';
import Form from './pages/form';
import Curse from './pages/curse'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/formulario" component={Form} />
        <Route path="/cursos/:nameRoute" component={Curse} />
        <Route path="/cursos" component={Curses} />
        <Route component={() => (<h2> Error 404</h2>)} />
      </Switch>
    </Router>
  );
}

export default App;
