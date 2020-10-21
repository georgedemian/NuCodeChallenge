import React from "react";
import Card from "./card";
const CardList = ({ list }) => {
  return (
    <>
      {list && list.length > 0
        ? list.map((el, i) => (
            <Card key={el.id} tabIndex={i} label={el.labels} title={el.title} />
          ))
        : null}
    </>
  );
};

export default CardList;
