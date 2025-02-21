import React from 'react'

export default function CartProd(props) {
    const name = props.name;
    const price = props.price;
    return (
        <div className="flex justify-between items-center w-75 bg-sky-600 text-3xl font-bold px-6 py-3 rounded-lg">
            <span>{name}</span>
            <span>{price}</span>
        </div>
    
      )
}
