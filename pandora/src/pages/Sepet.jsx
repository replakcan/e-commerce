import { Button } from "@/components/ui/button";
import { ChevronRight, Minus, Plus, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, incrementCount, removeFromCart, toggleChecked } from "@/redux/actions/shoppingCartActions";
import { useHistory } from "react-router-dom";

const shippingTotal = 7.99;
let kargoBedeli = 7.99;

const SepetPage = () => {
    const cartItems = useSelector((store) => store.shoppingCart.cart);
    const user = useSelector((store) => store.client.user);
    const dispatch = useDispatch();
    let history = useHistory();


    // Sadece checked olan ürünlerin toplamını hesaplayın
    const orderTotal = cartItems
        .filter(item => item.checked)
        .reduce((total, item) => total + item.product.price * item.count, 0)
        .toFixed(2);

    const handleConfirmOrder = () => {
        if (Object.keys(user).length === 0) {
            // Eğer kullanıcı giriş yapmamışsa login sayfasına yönlendir
            history.push("/login");
        } else {
            // Kullanıcı giriş yaptıysa confirm-order sayfasına git
            history.push("/confirm-order");
        }
    };

    if (orderTotal >= 200) {
        kargoBedeli = 0;
    }

    return (
        <div className="flex flex-col gap-8 px-[10%] py-4 md:flex-row">
            <div>
                {cartItems?.map((item, index) => (
                    <div key={index} className="flex items-center flex-wrap justify-between row-gap-2 border shadow-md p-2">
                        <div className="flex items-center">
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => dispatch(toggleChecked(item.product.id))}
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
                                <Button variant="default" size="iconsqr" onClick={() => {
                                    if (item.count > 1) {
                                        dispatch(decrementCount(item.product.id));
                                    }
                                }}>
                                    <Minus />
                                </Button>
                                <div className="w-[36px] h-[36px] flex items-center justify-center">{item.count}</div>
                                <Button variant="default" size="iconsqr" onClick={() => dispatch(incrementCount(item.product.id))}>
                                    <Plus />
                                </Button>
                            </div>
                            <p className="text-danger font-bold">Ürün toplam fiyat: {(item.product.price * item.count).toFixed(2)}$</p>
                            <Button variant="icon" onClick={() => dispatch(removeFromCart(item.product.id))}>
                                <Trash />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order-box h-fit border border-black p-2 flex flex-col gap-1 md:min-w-[240px]">

                <h1 className="font-bold pb-2 border-b border-red-300">SİPARİŞ ÖZETİ</h1>
                <div className="flex justify-between items-center">
                    <h2>Product TOTAL:</h2> <span>{orderTotal}$</span>
                </div>
                <div className="flex justify-between items-center">
                    <h2>Shipping total:</h2> <span>{shippingTotal}$</span>
                </div>
                {
                    orderTotal >= 200 &&
                    <div className="flex justify-between items-center">
                        <h2 className="italic text-ikincil max-w-[50%]">200 dolar ve üzeri siparislerde kargo bedava</h2>
                        <span className="italic">
                            {shippingTotal * (-1)}$
                        </span>
                    </div>
                }
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">ORDER TOTAL:</h1>
                    <span>{orderTotal + kargoBedeli}$</span>
                </div>
                <Button onClick={handleConfirmOrder} variant="destructive">Sepeti Onayla <ChevronRight /></Button>
            </div>
        </div>
    );
};

export default SepetPage;
