import { useSelector } from "react-redux";
import OrderSumm from "@/components/OrderSummary";
import SepetItem from "@/components/SepetItem";

//TODO: Sepet ismini cart yap
const SepetPage = () => {
  const cartItems = useSelector((store) => store.shoppingCart.cart);

  return (
    <div className="flex flex-col gap-8 px-[10%] py-4 md:flex-row md:justify-between min-h-lvh">
      <div className="sepetUrunu w-full">
        {cartItems?.map((item, index) => (
          <SepetItem key={index} item={item} />
        ))}
      </div>
      <div className="w-full lg:w-1/3 h-fit bg-white shadow-lg rounded-lg p-6">
        <OrderSumm />
      </div>
    </div>
  );
};

export default SepetPage;
