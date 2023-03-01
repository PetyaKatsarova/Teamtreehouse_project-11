import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.js';

import Gallery from './Gallery';
import Loader from './Loader';

export default class Container extends Component {
  constructor(props){
      super(props);
      this.state = {
          pictures: [],
          loading: true
      }
  }
  // load images
  componentDidMount(){
      this.runSearch(this.props.searchText);
  }
  // load new pictures for new search
  componentDidUpdate(prevProps){
    if(prevProps.searchText !== this.props.searchText){
        this.runSearch(this.props.searchText);
    }
  }
  // fetch the data
   runSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
              pictures: response.data.photos.photo,
              loading: false
            });
        })
        .catch(error => {
           console.log('error parsing and fetching data', error);
           alert("Error: 404 URL path doesn't match the route");
        });
   }
   render(){
       console.log(this.state.pictures);
       return(
         <div className = 'photo-container'>
            <h3>Pictures of { this.props.searchText} </h3>
             {(this.state.loading) ? <Loader /> : <Gallery data={this.state.pictures} /> }
         </div>
       );
   }

}
