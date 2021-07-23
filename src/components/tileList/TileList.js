import React from "react";
import Tile from '../tile/Tile';

const TileList = (props) => {

  const list = props.contacts;

  return (
    <div>
      {list.map((obj, index) => (
        <Tile object={obj} key={index}  />
      ))}
    </div>
  );
};

export default TileList;