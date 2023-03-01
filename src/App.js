import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// components
import Header from './components/Header';
import Frogs from './components/Frogs';
import Sunflowers from './components/Sunflowers';
import Africa from './components/Africa';
import NoResults from './components/NoResults';
import Search from './components/Search';

export default class App extends Component {
  // prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }
  render(){
    return(
      <BrowserRouter>
         <div className="container">
           <Route render={ props => <Header handleSubmit={this.handleSubmit} history={props.history}/> } />
           <Switch>
             <Route exact path='/' render={()=> <Redirect to="/africa" /> } />
             <Route path='/sunflowers' render={ ()=> <Sunflowers searchText='sunflowers' /> } />
             <Route path='/frogs' render={ ()=> <Frogs searchText='toads' /> } />
             <Route path='/africa' render={ ()=> <Africa searchText='africa' /> } />
             <Route path='/search/:searchInput' render={(props)=> <Search searchText = {props.match.params.searchInput} />} />
             <Route component={NoResults} /> } />
           </Switch>
         </div>
      </BrowserRouter>
    );
  }
}

