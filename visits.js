import React from 'react';

const visit = (props) => {

  return(
    <div>
      <div>
        <select id="parkName" onChange={props.change}>
          <option value="Yosemite">Yosemite</option>
          <option value="Sequoia">Sequoia</option>
          <option value="Death Valley">Death Valley</option>
          <option value="Arches">Arches</option>
          <option value="Bryce Canyon">Bryce Canyon</option>
          <option value="Carlsbad Caverns">Carlsbad Caverns</option>
          <option value="Gila Cliff Dwellings">Gila Cliff Dwellings</option>
          <option value="Mammoth Cave">Mammoth Cave</option>
          <option value="Everglades">Everglades</option>
        </select>
      </div>
    </div>
  )
};


export default visit;
