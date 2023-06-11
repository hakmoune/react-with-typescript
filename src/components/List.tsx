import React from "react";

interface Iprops {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

/*export const List = ({ people }: Iprops) => {
  console.log(people);
  return (
    <>
      <h4>Im a list</h4>
    </>
  );
};*/

export const List: React.FC<Iprops> = ({ people }) => {
  console.log(people);
  return (
    <>
      <h4>Im a list</h4>
    </>
  );
};
