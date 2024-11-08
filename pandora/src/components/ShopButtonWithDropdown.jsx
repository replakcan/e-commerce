import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ShopDropdown() {
  const categories = useSelector((store) => store.product.categories);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="md:text-ikincil">
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <div className="grid grid-cols-2 gap-8 p-4">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <h4 className="font-bold mb-2">Kadın</h4>
            </DropdownMenuItem>
            {categories.map((cat, index) => {
              if (cat.gender === "k") {
                return (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      to={`/shop/kadin/${cat.code.slice(2)}/${cat.id}`}
                      className="cursor-pointer"
                    >
                      {cat.title}
                    </Link>
                  </DropdownMenuItem>
                );
              }
              return null;
            })}
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <h4 className="font-bold mb-2">Erkek</h4>
            </DropdownMenuItem>
            {categories.map((cat, index) => {
              if (cat.gender === "e") {
                return (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      to={`/shop/erkek/${cat.code.slice(2)}/${cat.id}`}
                      className="cursor-pointer"
                    >
                      {cat.title}
                    </Link>
                  </DropdownMenuItem>
                );
              }
              return null;
            })}
          </DropdownMenuGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
