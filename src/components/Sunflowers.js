import React from 'react';
import Container from './Container';

const Sunflowers = (props) => {
  return(
    <div>
        <Container searchText = {props.searchText} />
    </div>
  );
}

export default Sunflowers;

