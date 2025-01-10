import { useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction } from 'react';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';

interface CartProps {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

interface Product {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const Cart: React.FC<CartProps> = ({ setShowCart }) => {
  const products = useAppSelector((state) => state.cartReducer) as Product[];

  const getTotal = () =>
    products.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className="bg-black bg-opacity-50 w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 shadow-lg">
        {/* Close Icon */}
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer text-gray-600 hover:text-black transition-colors"
          onClick={() => setShowCart(false)}
          role="button"
          aria-label="Close Cart"
        />

        {/* Cart Heading */}
        <h3
          id="cart-heading"
          className="pt-6 text-lg font-medium text-gray-600 uppercase"
        >
          Your Cart
        </h3>

        {/* Cart Products */}
        <div className="mt-6 space-y-4">
          {products.length > 0 ? (
            products.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center font-medium text-xl py-4 border-t mt-6">
          <p>Total:</p>
          <p>${getTotal().toFixed(2)}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mt-4">
          <button
            className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-gray-800 transition-colors"
          >
            View Cart
          </button>
          <button
            className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-gray-800 transition-colors"
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;