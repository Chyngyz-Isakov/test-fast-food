import React from 'react';
import {nanoid} from "nanoid";
import foodImage from './assets/food.png';
import drinkImage from './assets/drink.png';
import './App.css';
import {FastFoodItem} from "./types";

const App = () => {

    const ITEMS: FastFoodItem[] = [
        {id: nanoid(), name: 'Hamburger', price: 80, image: foodImage},
        {id: nanoid(), name: 'CheeseBurger', price: 90, image: foodImage},
        {id: nanoid(), name: 'Fries', price: 45, image: foodImage},
        {id: nanoid(), name: 'Coffee', price: 70, image: drinkImage},
        {id: nanoid(), name: 'Tea', price: 50, image: drinkImage},
        {id: nanoid(), name: 'Cola', price: 40, image: drinkImage},
    ];


    const showItems = ITEMS.map((item, index) => {
        return (
            <div className='item-choose'>
                <img className='item-img'
                     src={item.image} alt={item.name}
                />
                <p>{item.name}</p>
                <p>Price: {ITEMS[index].price} KGS</p>
            </div>
        )
    })


  return (
      <div className="App">
          <div className='order-wrap'>
              <h4 className='order-title'>Order Details:</h4>

          </div>
          <div className='items-wrap'>
              <h4 className='item-title'>Add Items:</h4>
              {showItems}
          </div>

      </div>
  );
};

export default App;
