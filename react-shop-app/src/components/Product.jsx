import React, {useState} from 'react'

export default function Product(props) {
    const { cart, setCart, prodName, price } = props;

    function handleAddToCart() {
        const updatedCart = [...cart, { prodName: prodName, price: price }];
        setCart(updatedCart);
        console.log('Product added to cart:', { prodName, price });
        console.log('Updated cart:', updatedCart);
    }

    return (
    <div className="flex flex-row items-center justify-between w-120 h-15 rounded-lg text-4xl font-bold bg-sky-600 p-4">
        <div>{prodName}</div>
        <div>price={price}</div>
        <button onClick={handleAddToCart} className='cursor-pointer'>+</button>
    </div>

  )
}
