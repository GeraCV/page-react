import React from 'react';
import "./scss/styles.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './components/banner';
import Curses from './components/curses';
import Formulario from './components/formulario';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/banner" component={Banner} />
        <Route path="/formulario" component={Formulario} />
        <Route path="/cursos" component={Curses} />
        <Route component={() => (<h2> Error 404</h2>)} />
      </Switch>
    </Router>
  );
}

export default App;
