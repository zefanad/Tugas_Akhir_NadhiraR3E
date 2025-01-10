import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

interface PropsType {
  id: string;
  img: string;
  title: string;
  price: number;
  category: string;
}

const ProductCard = ({ id, img, category, title, price }: PropsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price,
      quantity: 1,
    };

    dispatch(addToCart(payload));
    makeToast("Added to Cart");
  };

  return (
    <div
      className="border border-gray-200 rounded-lg hover:border-accent transition-all"
    >
      {/* Image Section */}
      <div className="text-center border-b border-gray-200 p-4">
        <Image
          src={img}
          alt={`Image of ${title}`}
          className="inline-block"
          width={150}
          height={150}
        />
      </div>

      {/* Product Info Section */}
      <div className="px-6 py-4">
        <p className="text-gray-500 text-sm font-medium">{category}</p>
        <h2 className="font-medium text-lg">{title}</h2>

        {/* Rating Section */}
        <div className="mt-3 flex items-center text-[#FFB21D]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 text-sm ml-2">(3 Reviews)</p>
        </div>

        {/* Price & Add to Cart Section */}
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">${price}</h2>
          <div
            className="flex items-center gap-2 bg-pink text-white px-4 py-2 rounded-md cursor-pointer hover:bg-accent transition-all"
            onClick={addProductToCart}
            role="button"
          >
            <AiOutlineShoppingCart /> Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;