import React from "react";
import Pet from "./Pet";
import { createRoot } from "react-dom";

const App = () => {
  return (<div>
    <h1>Adopt me!</h1>
    <Pet animal="Dog" name="Luna" breed="Havanese"/>
    <Pet animal="Bird" name="Pepper" breed="Cockatiel"/>
    <Pet animal="Cat" name="Doink" breed="Mixed"/>
  </div>);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
