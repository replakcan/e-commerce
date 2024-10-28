import { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { useSelector } from 'react-redux';
import Heading from './ui/heading';

const ShopButtonWithDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const categories = useSelector((store) => store.product.categories)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    /* const navigateTo = (gender, category, categoryId) => {
        history.push(`/shop/${gender}/${category}/${categoryId}`);
        setIsDropdownOpen(false);
    }; */

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative z-index-high" ref={dropdownRef}>
            {/* Buton üzerine onClick ekliyoruz */}
            <Button
                onClick={toggleDropdown}
                variant="ghost"
                size="sm"
                className="md:text-ikincil"
            >
                Shop <ChevronDown />
            </Button>

            {/* Dropdown menü butona tıklanınca açılacak */}
            {isDropdownOpen && (
                <div
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-8"
                    style={{ minWidth: '300px' }}
                >
                    {/* Kadın Bölümü */}
                    <div>
                        <Heading variant='h4' className="font-bold mb-2">Kadın</Heading>
                        <ul className="flex flex-col">
                            {categories.map((cat, index) => {
                                if (cat.gender === "k") {
                                    return <Link key={index} to={`/shop/kadin/${cat.code}/${cat.id}`} className="cursor-pointer">{cat.title}</Link>
                                }
                            })}
                        </ul>
                    </div>
                    {/* Erkek Bölümü */}
                    <div>
                        <Heading variant='h4' className="font-bold mb-2">Erkek</Heading>
                        <ul className="flex flex-col">
                            {categories.map((cat, index) => {
                                if (cat.gender === "e") {
                                    return <Link key={index} to={`/shop/erkek/${cat.code}/${cat.id}`} className="cursor-pointer">{cat.title}</Link>
                                }
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopButtonWithDropdown;
