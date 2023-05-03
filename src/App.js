import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function App() {
  const randomAnimal = () => {
    const animals = ["dog", "cat", "cow", "bird", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };
  const [animal, setAnimal] = useState([]);

  const onClick = () => {
    setAnimal([...animal, randomAnimal()]);
  };

  const renderedAnimals = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index}></AnimalShow>;
  });

  return (
    <div className="app">
      <button onClick={onClick}>Add A Random Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
