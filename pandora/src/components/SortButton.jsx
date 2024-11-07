import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSort } from '@/redux/actions/productActions';

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);  // Dropdown'un açık/kapalı durumu
  const [selectedOption, setSelectedOption] = useState('Sort By');  // Seçilen seçenek
  const dropdownRef = useRef(null); // Dropdown menüsü için ref oluşturuyoruz
  const dispatch = useDispatch();

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
  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);  // Seçilen label'i göster
    setIsOpen(false);  // Dropdown'u kapat
    dispatch(setSort(option.value));  // Sadece Redux store'daki sort'u güncelle
  };

  // Dropdown dışında bir yere tıklanınca menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-index-high" ref={dropdownRef}>
      {/* Dropdown butonu */}
      <Button variant="outline" onClick={toggleDropdown}>
        {selectedOption} <ChevronDown />
      </Button>

      {/* Dropdown menüsü */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)} // Sadece Redux store'da sort'u set ediyoruz
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
