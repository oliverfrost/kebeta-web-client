import React from "react";
import { Switch, Route } from 'react-router-dom'
import BooksList from "../containers/books-list/Books-List";
import Book from '../book/Book';
import About from "../about/About";
import Home from '../home/Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/books' component={BooksList}/>
      <Route path='/books/:id' component={Book}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;