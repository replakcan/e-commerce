/* eslint-disable react/prop-types */
import Heading from "./ui/heading";
import { useState } from "react";

const BestSellerCard = ({ name, src, description, price, onClick }) => {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransform("rotateX(0deg) rotateY(0deg)");

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="BestSellerCard flex flex-col md:w-[23%] items-center text-center bg-white border rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-gray-50 via-white to-gray-100 cursor-pointer"
    >
      <div className="relative p-5 border aspect-video overflow-hidden object-center group">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-brilliant text-lg font-semibold">
            click to see product details
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <Heading
          variant="h4"
          className="transition-transform duration-300 transform group-hover:scale-105 group-hover:text-blue-600"
        >
          {name}
        </Heading>
        <p className="transition-colors duration-300 group-hover:text-gray-500">
          {description}
        </p>
        <p className="font-semibold text-gray-900 group-hover:text-blue-600">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default BestSellerCard;
