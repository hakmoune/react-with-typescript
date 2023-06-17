import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/List";

interface Istate {
  people: {
    name: string;
    image: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      image: "/350648832_777248340503534_8580341288252085460_n.jpg",
      age: 36,
      note: "I'm Baskateball Exper player i have 30 years of experiences"
    },
    {
      name: "Mehdi Hakmoune",
      image: "/354421205_1275766650008465_9087030362441219435_n.jpg",
      age: 32
    },
    {
      name: "Jinane El_Abziz",
      image: "/301161421_1294189061114115_4104623812836969875_n.jpg",
      age: 25,
      note: "I'm Data Analyst Exper i have 2 years of experiences"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to My Party!</h1>
      <List people={people} />
    </div>
  );
}

export default App;
