import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useHistory } from "react-router-dom";

export default function HamburgerMenu() {
  const history = useHistory();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" size="icon" className="text-black font-bold">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-dune ">
        <DropdownMenuItem
          className="hover:bg-mars hover:text-white"
          onClick={() => history.push("/about")}
        >
          About
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-mars hover:text-white"
          onClick={() => history.push("/contact")}
        >
          Contact
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-mars hover:text-white"
          onClick={() => history.push("/team")}
        >
          Team
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
