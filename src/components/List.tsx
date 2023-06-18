import React from "react";
import { Istate as Props } from "../App";

interface Iprops {
  people: Props["people"];
}

export const List: React.FC<Iprops> = ({ people }) => {
  const renderList = (): JSX.Element[] =>
    people.map(person => (
      <li className="List" key={person.age}>
        <div className="List-header">
          <img className="List-img" src={person.image} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));

  return <ul>{renderList()}</ul>;
};
