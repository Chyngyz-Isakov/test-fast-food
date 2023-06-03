import React, {useState} from 'react';
import {nanoid} from "nanoid";
import foodImage from './assets/food.png';
import drinkImage from './assets/drink.png';
import './App.css';
import {FastFoodItem, OrderItem} from "./types";

const App = () => {

    const ITEMS: FastFoodItem[] = [
        {id: nanoid(), name: 'Hamburger', price: 80, image: foodImage},
        {id: nanoid(), name: 'CheeseBurger', price: 90, image: foodImage},
        {id: nanoid(), name: 'Fries', price: 45, image: foodImage},
        {id: nanoid(), name: 'Coffee', price: 70, image: drinkImage},
        {id: nanoid(), name: 'Tea', price: 50, image: drinkImage},
        {id: nanoid(), name: 'Cola', price: 40, image: drinkImage},
    ];


    const [fastFood, setFastFood] = useState<OrderItem[]>([
        {id: nanoid(), name: 'Hamburger', count: 0, price: 0},
        {id: nanoid(), name: 'CheeseBurger', count: 0, price: 0},
        {id: nanoid(), name: 'Fries', count: 0, price: 0},
        {id: nanoid(), name: 'Coffee', count: 0, price: 0},
        {id: nanoid(), name: 'Tea', count: 0, price: 0},
        {id: nanoid(), name: 'Cola', count: 0, price: 0},
    ]);


    const [totalPrice, setTotalPrice] = useState(0);

    const makeOrder = (id: String) => {
        const choose = ITEMS.find((item) => item.id === id);
        if (choose) {
            const selectItem = fastFood.find((item) => item.id === id);
            if (selectItem) {
                const updatedOrder = fastFood.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }
                    return item;
                });
                setFastFood(updatedOrder);
            } else {
                const newOrderItem = {
                    ...choose,
                    count: 1,
                };
                setFastFood((prevOrder) => [...prevOrder, newOrderItem]);
            }
            setTotalPrice((prevPrice) => prevPrice + choose.price);
        }
    };
    console.log(totalPrice)

    // const showItems = ITEMS.map((item, index) => {
    //     return (
    //         <div onClick={item.id} className='item-choose'>
    //             <img className='item-img'
    //                  src={item.image} alt={item.name}
    //             />
    //             <p>{item.name}</p>
    //             <p>Price: {ITEMS[index].price} KGS</p>
    //         </div>
    //     )
    // })


    return (
        <div className="App">
            <div className='order-wrap'>
                <h4 className='order-title'>Order Details:</h4>
                {fastFood.map(item => (
                    <div key={item.id}>
                        {item.name}: {item.count}
                        <button>del</button>
                    </div>
                ))}
            </div>
            <div onClick={()=>makeOrder} className='items-wrap'>
                <h4 className='item-title'>Add Items:</h4>
                {ITEMS.map((item, index) => {
                    return (
                    <div onClick={()=>item.id} key={nanoid()} className='item-choose'>
                    <img className='item-img'
                    src={item.image} alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>Price: {ITEMS[index].price} KGS</p>
                    </div>
                    )
                })
                }
                {/*{showItems}*/}
            </div>

        </div>
    );
};


export default App;
