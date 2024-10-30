import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "./button";

const CartButton = () => {
    const cart = useSelector((store) => store.shoppingCart.cart);
    const itemCount = cart.reduce((total, item) => total + item.count, 0); // Sepetteki toplam ürün sayısını hesaplar
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center p-2 bg-blue-500 text-white rounded">
                Cart
                <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-sm">
                    {itemCount}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg p-4 z-10">
                    <h3 className="font-bold text-lg mb-2">Sepetim ({itemCount} Ürün)</h3>
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.product.images[0]?.url}
                                    alt={item.product.name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <h4 className="font-semibold">{item.product.name}</h4>
                                    <p className="text-sm text-gray-500">{item.product.description}</p>
                                    <p className="text-sm">Adet: {item.count}</p>
                                    <p className="text-ikincil-500 font-semibold">{item.product.price} $</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Sepetinizde ürün yok.</p>
                    )}
                    <div className="flex justify-between mt-4">
                        <button className="p-2 bg-gray-200 rounded">Sepete Git</button>
                        <Button>Siparişi Tamamla</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartButton;
