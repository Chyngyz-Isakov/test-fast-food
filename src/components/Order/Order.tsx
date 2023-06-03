import React from "react";
import {Count, OrderType} from "../../types";


interface IProps {
    price: number;
    totalCount: Count[];
    food: OrderType[];
    delete: (name: string) => void;
    key:string;
}

const Order: React.FC<IProps> = (props) => {
    return (
        <div>
            <p className="total-price">Total price: {props.price} KGS</p>
            {props.totalCount.map((item, index) => {
                if (props.food.length === 0) {
                    return <p>Empty order</p>;
                }
                for (let i = 0; i < item.count; i++) {
                    const orderPrice = item.count * props.food[i].price;
                    return (
                        <p key={props.key}>
                            <b style={{marginRight: '10px'}}>{item.name}:</b>
                            <b style={{marginRight: '10px'}}>x{item.count}</b>

                            <span style={{marginRight: '10px'}}>
                            = <b>{orderPrice} KGS</b>
                             </span>
                            <button
                                className="remove-btn"
                                onClick={() => props.delete(item.name)}
                            >
                                X
                            </button>

                        </p>
                    );
                }return <p>Empty Item</p>
            })}
        </div>
    );
};


    export default Order;