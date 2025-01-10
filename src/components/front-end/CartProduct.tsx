import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

interface PropsType {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<PropsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center py-4 border-b">
      {/* Product Details */}
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <Image
          className="h-[80px] w-[80px] object-cover rounded"
          src={img}
          alt={title}
          width={80}
          height={80}
        />
        
        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">
            {quantity} x ${price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Remove Icon */}
      <RxCross1
        className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors"
        onClick={() => dispatch(removeFromCart(id))}
        aria-label={`Remove ${title} from cart`}
      />
    </div>
  );
};

export default CartProduct;