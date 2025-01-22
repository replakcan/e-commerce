/* eslint-disable react/prop-types */
import {
  decrementCount,
  incrementCount,
  removeFromCart,
  toggleChecked,
} from "@/redux/actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Minus, Plus, Trash } from "lucide-react";

const SepetItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-4 border shadow-md p-4 rounded-lg bg-white">
      <div className="flex items-center w-full lg:w-auto">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => dispatch(toggleChecked(item.product.id))}
          className="mr-2 h-5 w-5 cursor-pointer"
        />
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] overflow-hidden rounded-lg">
          <img
            src={item.product.images[0]?.url}
            alt={item.product.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex-grow p-4 border border-gray-200 rounded-lg bg-gray-50 w-full">
        <h1 className="text-lg font-semibold text-gray-800">
          {item.product.name}
        </h1>
        <p className="text-sm text-gray-600 mt-1">{item.product.description}</p>
      </div>
      <div className="flex flex-col w-full h-full  lg:gap-24">
        <div className="flex items-center justify-start gap-2">
          <Button
            variant="default"
            size="iconsqr"
            onClick={() => {
              if (item.count > 1) {
                dispatch(decrementCount(item.product.id));
              }
            }}
          >
            <Minus />
          </Button>
          <div className="w-[36px] h-[36px] flex items-center justify-center bg-gray-100 rounded-md">
            {item.count}
          </div>
          <Button
            variant="default"
            size="iconsqr"
            onClick={() => dispatch(incrementCount(item.product.id))}
          >
            <Plus />
          </Button>
        </div>
        <div className="text-center  flex justify-between items-center w-full">
          <p className="text-lg font-bold text-red-600">
            ${(item.product.price * item.count).toFixed(2)}
          </p>
          <Button
            variant="icon"
            onClick={() => dispatch(removeFromCart(item.product.id))}
            className="text-red-500 hover:text-red-700"
          >
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SepetItem;
