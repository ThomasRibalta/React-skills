import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  async function fetchPizzaOfTheDay() {
    const pizzaRes = await fetch("/api/pizza-of-the-day");
    const pizzaJson = await pizzaRes.json();
    setPizzaOfTheDay(pizzaJson);
  }

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
