import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../organisms/header';
import Banner from '../pages/banner.jsx';
import Courses from '../pages/courses';
import Form from '../pages/form';
import Course from '../pages/course';
import Users from '../pages/users';


const RootRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/formulario" component={Form} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={Courses} />
        <Route path="/usuarios" component={Users} />
        <Route component={() => (<h2> Error 404</h2>)} />
      </Switch>
    </Router>
  );
}

export default RootRouter