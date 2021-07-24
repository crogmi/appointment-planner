import React from "react";
import Tile from '../tile/Tile';

const TileList = (props) => {

  return (
    <div>
      {props.array.map((obj, index) => (
        <Tile object={obj} key={index}  />
      ))}
    </div>
  );
};

export default TileList;