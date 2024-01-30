import "./about.css";
import { useState } from "react";

function About() {
  const [count, setCount] = useState(0);
  const [hobbies, setHobbiest] = useState([
    "{Fishing",
    "Motorcycle travel",
    "Watch TV",
  ]);
  const [projects, setProjects] = useState([
    "{organika",
    "the one about the houses",
    "the first project",
  ]);

  function handleButton() {
    console.log("Button clicked");
    setCount(count + 1);
  }

  return (
    <div className="about">
      <h1>Contact Us</h1>
      <label>Clicked: {count}</label> <br />
      <button onClick={handleButton}>Test</button>
      <hr />
      {hobbies.map((hb) => (
        <button className="btn btn-sm btn-primary mx-3">{hb}</button>
      ))}

      <hr />
      <h2>My coding projects</h2>
      {projects.map((pr) => (
        <h3>{pr}</h3>
      ))}
  </div>);
}

export default About;
