import React from "react";

interface IProps {
    name: string;
    price: number;
    image: string;
    key: string;
    makeOrder: (name: string) => void;
}

const Item: React.FC<IProps> = props => {
    return (
        <div onClick={() => props.makeOrder(props.name)} className="item-choose">
            <img
                className="item-img"
                src={props.image}
                alt="meat"
            />
            <p className="name">{props.name}</p>
            <p>
                Price: <strong>{props.price} KGS</strong>
            </p>
        </div>
    );
};

export default Item;