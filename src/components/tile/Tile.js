import React from "react";

const Tile = (props) => {
  
  const tile = props.object;
  const values = Object.values(tile);
  
  return (
    <div className="tile-container">
        {values.map((value, index) => (
        <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>
          {value}
        </p>
      ))}
    </div>
  );
};

export default Tile;
