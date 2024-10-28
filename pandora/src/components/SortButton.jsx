import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Link bileşenini import ediyoruz
import { Button } from './ui/button'; // Eğer custom button kullanıyorsanız
import { ChevronDown } from 'lucide-react';

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);  // Dropdown'un açık/kapalı durumu
  const [selectedOption, setSelectedOption] = useState('Sort');  // Seçilen seçenek
  const { gender, categoryName, categoryId } = useParams(); // Mevcut URL parametrelerini alıyoruz

  // Dropdown seçenekleri
  const options = [
    { label: 'Price: Low to High', value: 'price:asc' },
    { label: 'Price: High to Low', value: 'price:desc' },
    { label: 'Rating: Low to High', value: 'rating:asc' },
    { label: 'Rating: High to Low', value: 'rating:desc' },
  ];

  // Butona tıklandığında dropdown'u aç/kapa
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Bir seçenek seçildiğinde
  const handleOptionSelect = (label) => {
    setSelectedOption(label);  // Seçilen label'i göster
    setIsOpen(false);  // Dropdown'u kapat
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown butonu */}
      <Button variant="outline" onClick={toggleDropdown}>
        {selectedOption} <ChevronDown />
      </Button>

      {/* Dropdown menüsü */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <Link
                key={index}
                to={`/shop/${gender}/${categoryName}/${categoryId}/${option.value}`}
                onClick={() => handleOptionSelect(option.label)} // Label'i güncelleyip dropdown'u kapatıyoruz
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
