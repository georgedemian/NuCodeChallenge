import React from "react";

const Card = ({ title, tabIndex, label }) => {
  const labelList = label.map((l,i) => 
    <small key={l+i} style={{padding:2, border:'1px solid lightgrey', margin:'0px 3px', background:'white'}}>
        {l.name}
        </small>);

  return (
    <div
      style={{
        padding: "1em",
        backgroundColor: "aliceblue",
        border: "1px solid dodgerblue",
        margin: "5px auto"
      }}
      tabIndex={tabIndex}
    >
      <span>
      {title} 
      {labelList}
      </span>
    </div>
  );
};

export default Card;
