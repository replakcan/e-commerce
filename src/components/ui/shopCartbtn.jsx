import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const cart = useSelector((store) => store.shoppingCart.cart);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);

  const goToCart = () => history.push("/siparis-ozeti");

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Shopping cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-dune">
        <DropdownMenuLabel>Sepetim ({itemCount} Ürün)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 mb-4">
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    {item.product.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.product.description}
                  </p>
                  <p className="text-sm">Adet: {item.count}</p>
                  <p className="text-sm font-semibold">
                    {item.product.price} $
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Sepetinizde ürün yok.
            </p>
          )}
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button className="w-full" onClick={goToCart}>
            Sepete Git
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartButton;
