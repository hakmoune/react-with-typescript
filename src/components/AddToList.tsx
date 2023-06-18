import React, { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

interface IstateInput {
  people: {
    name: string;
    age: string;
    image: string;
    note: string;
  };
}

export const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState<IstateInput["people"]>({
    name: "",
    age: "",
    image: "",
    note: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        image: input.image,
        note: input.note
      }
    ]);
    setInput({
      name: "",
      age: "",
      image: "",
      note: ""
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        value={input.name}
        placeholder="Name"
        onChange={handleChange}
        //onChange={e => setInput({ ...input, name: e.target.value })}
        //onChange={e => setInput(state => ({ ...state, name: e.target.value }))}
        name="name"
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.age}
        placeholder="Age"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.image}
        placeholder="Image Url"
        onChange={handleChange}
        name="image"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};
