import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, incrementCount, removeFromCart, toggleChecked } from "@/redux/actions/shoppingCartActions";

const SepetPage = () => {
    const cartItems = useSelector((store) => store.shoppingCart.cart);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementCount(item.product.id));
    };

    const handleDecrement = (item) => {
        if (item.count > 1) {
            dispatch(decrementCount(item.product.id));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item.product.id)); // Ürünü tamamen kaldırmak için
    };

    const handleCheckboxChange = (item) => {
        dispatch(toggleChecked(item.product.id)); // Checkbox durumunu toggle eden aksiyon
    };

    // Sadece checked olan ürünlerin toplamını hesaplayın
    const orderTotal = cartItems
        .filter(item => item.checked)
        .reduce((total, item) => total + item.product.price * item.count, 0)
        .toFixed(2);

    return (
        <div className="flex flex-col gap-8 px-[10%] py-4">
            <div>
                {cartItems?.map((item, index) => (
                    <div key={index} className="flex items-center flex-wrap justify-between row-gap-2 border shadow-md p-2">
                        <div className="flex items-center">
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheckboxChange(item)}
                            />
                            <div className="max-w-[150px] max-h-[150px] overflow-hidden ml-2">
                                <img src={item.product.images[0]?.url} alt="" />
                            </div>
                        </div>
                        <div className="p-2 border border-black flex-grow">
                            <h1>{item.product.name}</h1>
                            <p>{item.product.description}</p>
                        </div>
                        <div className="flex gap-10 items-center w-full justify-between">
                            <div className="flex items-center">
                                <Button variant="default" size="iconsqr" onClick={() => handleDecrement(item)}>
                                    <Minus />
                                </Button>
                                <div className="w-[36px] h-[36px] flex items-center justify-center">{item.count}</div>
                                <Button variant="default" size="iconsqr" onClick={() => handleIncrement(item)}>
                                    <Plus />
                                </Button>
                            </div>
                            <p className="text-danger font-bold">Ürün toplam fiyat: {(item.product.price * item.count).toFixed(2)}$</p>
                            <Button variant="icon" onClick={() => handleRemove(item)}>
                                <Trash />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <h1>ORDER TOTAL: {orderTotal}$</h1>
        </div>
    );
};

export default SepetPage;
