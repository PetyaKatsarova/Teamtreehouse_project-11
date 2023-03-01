import React from 'react';
import NoResults from './NoResults';
import Picture from './Picture';

const Gallery = (props) => {
    let pictures;
	if(props.data.length>0){
		pictures = props.data.map(pic => (
			<Picture
				title={pic.title}
				key={pic.id}
				url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
			/>
		));
	} else {
			pictures = <NoResults />
	}
    return(
      <div>
          <ul> {pictures} </ul>
      </div>
    );
}
export default Gallery;
