import React from 'react'
import CartProd from '../components/CartProd'
import { useLocation } from 'react-router-dom';

export default function Cart({cart, clearCart}) {
    function handleBuyBtn() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Thank you for shopping with us! Items moved to purchase history.");
        clearCart();  // Moves items to purchasedItems and clears the cart
    }

    return (
        <div className="flex border-2 border-lime-600 w-150 px-6 py-2 max-w-3xl mx-auto">
          {/* Left Section - Cart Title */}
          <div className="flex flex-row items-start justify-start w-1/3">
            <h2 className="text-4xl font-bold">Cart</h2>
            <img src="src\assets\cart-icon.svg" alt="cart icon" className='w-10' />
          </div>
    
          {/* Right Section - Product List & Checkout */}
          <div className="w-2/3 border-l border-sky-600 pl-6 mt-4 h-full">

            <div className="flex flex-col items-center gap-2">
                {/* Cart Items */}
                {cart && cart.length > 0 ? (
                    cart.map((product, index) => (
                        <CartProd key={index} name={product.prodName} price={product.price} />
                    ))
                ) : (
                    <p className="text-xl font-bold text-red-600">Cart is empty</p>
                )}

                {/* Total Price */}
                <div className="text-4xl font-bold mt-4">
                    Total = {cart.reduce((total, product) => total + parseFloat(product.price), 0)}
                </div>

              {/* Buy Button */}
              <button onClick={handleBuyBtn} className="bg-sky-600 text-black text-4xl font-bold px-2 py-1 rounded-lg self-end cursor-pointer">
                Buy
              </button>
            </div>
          </div>
        </div>
    );
}
