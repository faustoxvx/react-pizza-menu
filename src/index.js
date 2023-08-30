import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and 'mozarella'",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, 'mozarella', spinach and almond ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, 'mozarella', mushrooms and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, 'mozarella' and 'pepperoni'",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients:
      "Tomato, 'mozarella', 'ham', aragula and cashew burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Vegan React Pizza Restaurant</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic cruelty-free Italian cuisine. All ingredients are organic,
            vegan and baked directly in our traditional stone oven.
          </p>

          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({pizzaObj}) {
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 23;
  const isOpen = hour >= openingHour && hour <= closingHour;

  /*  if (hour >= openingHour && hour <= closingHour)
    alert("We're currently open!");
  else alert("Sorry we're closed..."); */

  /* if (!isOpen)
    return (
      <p>
        We're happy to make you tasty pizzas between {openingHour}:00 and{" "}
        {closingHour}
        :00.
      </p>
    ); */

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closingHour={closingHour} openingHour={openingHour} />
      ) : (
        <p>
          We're happy to make you tasty pizzas between {openingHour}:00 and
          {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({closingHour, openingHour}) {
  return (
    <div className='order'>
      <p>
        We're open from {openingHour}:00 to {closingHour}:00. Come visit us or
        order online!
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
