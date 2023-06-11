import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Istate {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      url: "",
      age: 36,
      note: "I'm Baskateball Exper player i have 30 years of experiences"
    },
    {
      name: "Mehdi Hakmoune",
      url: "",
      age: 32
    },
    {
      name: "Jinane El_Abziz",
      url: "",
      age: 25,
      note: "I'm Data Analyst Exper i have 2 years of experiences"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
    </div>
  );
}

export default App;
