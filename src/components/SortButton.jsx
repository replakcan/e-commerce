import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSort } from "@/redux/actions/productActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SortButton = () => {
  const [selectedOption, setSelectedOption] = useState("Sort By");
  const dispatch = useDispatch();

  // Dropdown options
  const options = [
    { label: "Price: Low to High", value: "price:asc" },
    { label: "Price: High to Low", value: "price:desc" },
    { label: "Rating: Low to High", value: "rating:asc" },
    { label: "Rating: High to Low", value: "rating:desc" },
  ];

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    dispatch(setSort(option.value)); // Only update the sort in Redux store
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedOption} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortButton;
