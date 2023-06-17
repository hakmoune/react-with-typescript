import React from "react";

interface Iprops {
  people: {
    name: string;
    image: string;
    age: number;
    note?: string;
  }[];
}

//export const List = ({ people }: Iprops) => {}
export const List: React.FC<Iprops> = ({ people }) => {
  const renderList = (): JSX.Element[] =>
    people.map(person => (
      <li className="List">
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
