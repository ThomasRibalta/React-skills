import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <div>
        <CartContext.Provider value={cartHook}>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </CartContext.Provider>
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
