import React, {useState} from 'react'
import Product from '../components/Product'
import Cart from '../pages/Cart'
import { Link  } from 'react-router-dom';

export default function Home({cart, setCart}) {

    return (
        <div className="flex flex-col items-center gap-4 border-2 border-lime-600 p-6 w-full max-w-lg mx-auto">
        {/* Header Section */}
        <header className="flex items-center justify-between w-full px-4 border-b pb-2">
            <button className="text-3xl cursor-pointer">
            <img src="src\assets\home-icon-silhouette-svgrepo-com.svg" alt="home icon" className='w-10' />
            </button>
            <h2 className="text-4xl font-bold">SV-SHOP</h2>
            <Link to={'/cart'} className="text-3xl cursor-pointer">
                <img src="src/assets/cart-icon.svg" alt="cart icon" className='w-13' />
            </Link>
        </header>

        {/* Product List */}
        <h2 className="text-2xl self-start font-bold mt-2">List of products</h2>
        <div className="w-full flex flex-col items-center gap-2">
            <Product cart= {cart} setCart={setCart} prodName="Computer" price="100" />
            <Product cart= {cart} setCart={setCart} prodName="Paper" price="1" />
            <Product cart= {cart} setCart={setCart} prodName="Pen" price="10" />
        </div>
        </div>
    );
}
