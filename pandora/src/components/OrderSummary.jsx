import { useHistory } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { ChevronRight } from "lucide-react";


const shippingTotal = 7.99;
let kargoBedeli = 7.99;


const OrderSumm = () => {

    const cartItems = useSelector((store) => store.shoppingCart.cart);
    const user = useSelector((store) => store.client.user);
    let history = useHistory();
    const cartAddress = useSelector((store) => store.shoppingCart.address)

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
        <div className="order-box h-fit border border-grey-200 p-2 flex flex-col gap-1 md:min-w-[240px]">

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
            {cartAddress && <div>
                <p>Teslimat Adresi: <span className="font-bold text-ikincil">{cartAddress.title}</span></p>
            </div>}
        </div>
    )
}
export default OrderSumm;