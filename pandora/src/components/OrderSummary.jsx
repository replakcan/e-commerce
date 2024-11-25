import { useHistory, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight } from "lucide-react";
import { createOrder } from "@/redux/actions/shoppingCartActions";
import { toast } from "react-toastify";

const shippingTotal = 7.99;
let kargoBedeli = 7.99;

const OrderSumm = () => {
  const cartItems = useSelector((store) => store.shoppingCart.cart);
  const user = useSelector((store) => store.client.user);
  const history = useHistory();
  const location = useLocation(); // Mevcut URL'i kontrol etmek için kullanılıyor.
  const dispatch = useDispatch();
  const cartAddress = useSelector((store) => store.shoppingCart.address);
  const cartPayment = useSelector((store) => store.shoppingCart.payment);
  const cart = useSelector((store) => store.shoppingCart);

  const orderTotal = cartItems
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);

  if (orderTotal >= 200) {
    kargoBedeli = 0;
  }

  let siparisToplam = parseFloat(orderTotal) + kargoBedeli;

  const orderData = {
    address_id: cart.address.id,
    order_date: new Date().toISOString(),
    card_no: cart.payment.card_no,
    card_name: cart.payment.name_on_card,
    card_expire_month: cart.payment.expire_month,
    card_expire_year: cart.payment.expire_year,
    card_ccv: cart.payment.card_ccv,
    price: siparisToplam, // örnek fiyat
    products: cart.cart.map((item) => ({
      product_id: item.product.id,
      count: item.count,
      detail: item.product.name,
    })),
  };

  const handleConfirmOrder = () => {
    if (Object.keys(user).length === 0) {
      history.push("/login");
    } else {
      history.push("/confirm-order");
    }
  };

  const sendOrder = () => {
    console.log("orderData:", orderData);
    dispatch(createOrder(orderData, user.token));
    toast("Siparişiniz alındı, ana sayfaya yönlendiriliyorsunuz", {
      autoClose: 3000,
    });
    setTimeout(() => {
      history.push("/");
    }, 3000);
    cart.cart = [];
  };

  const isPreviousOrdersPage = location.pathname === "/confirm-order";

  return (
    <div className="order-box h-fit border border-grey-200 p-2 flex flex-col gap-1 md:min-w-[240px]">
      <h1 className="font-bold pb-2 border-b border-red-300">SİPARİŞ ÖZETİ</h1>
      <div className="flex justify-between items-center">
        <h2>Product TOTAL:</h2> <span>{orderTotal}$</span>
      </div>
      <div className="flex justify-between items-center">
        <h2>Shipping total:</h2> <span>{shippingTotal}$</span>
      </div>
      {orderTotal >= 200 && (
        <div className="flex justify-between items-center">
          <h2 className="italic text-ikincil max-w-[50%]">
            200 dolar ve üzeri siparislerde kargo bedava
          </h2>
          <span className="italic">{shippingTotal * -1}$</span>
        </div>
      )}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">ORDER TOTAL:</h1>
        <span>{siparisToplam.toFixed(2)}$</span>
      </div>
      {!isPreviousOrdersPage && cart.cart.length > 0 && (
        <Button onClick={handleConfirmOrder} variant="destructive">
          Sepeti Onayla <ChevronRight />
        </Button>
      )}
      {cartAddress.title && (
        <div>
          <p>
            Teslimat Adresi:{" "}
            <span className="font-bold text-ikincil">{cartAddress.title}</span>
          </p>
        </div>
      )}
      {cartPayment.name_on_card && (
        <div>
          <p>
            Ödeme Yöntemi:{" "}
            <span className="font-bold text-ikincil">
              {cartPayment.name_on_card}
            </span>
          </p>
        </div>
      )}
      {cartAddress.title && cartPayment.name_on_card && (
        <div>
          <Button onClick={sendOrder}>Siparişi Tamamla</Button>
        </div>
      )}
      {location.pathname === "/confirm-order" &&
        (!cartAddress.title || !cartPayment.name_on_card) && (
          <div className="text-red-500 font-semibold mt-2">
            {!cartAddress.title && !cartPayment.name_on_card && (
              <p className="text-destructive underline font-bold text-5xl">
                Kart ve adres seçiniz.
              </p>
            )}
            {!cartAddress.title && cartPayment.name_on_card && (
              <p className="text-destructive underline font-bold text-5xl">
                Adres seçiniz.
              </p>
            )}
            {cartAddress.title && !cartPayment.name_on_card && (
              <p className="text-destructive underline font-bold text-5xl">
                Kart seçiniz.
              </p>
            )}
          </div>
        )}
    </div>
  );
};

export default OrderSumm;
