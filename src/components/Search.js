import React from 'react';
import Container from './Container';

const Search = (props) => {

  return(
    <div>
        <Container searchText = {props.searchText} />
    </div>
  );
};

export default Search;