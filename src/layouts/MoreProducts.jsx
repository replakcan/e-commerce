/* eslint-disable react/prop-types */
import ShopPageCard from "@/components/ShopPageCard";
import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const MoreProducts = ({ bestSeller }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { categoryId, gender, categoryName } = useParams();

  const handleProductClick = (product) => {
    const productNameSlug = product.name.replace(/\s+/g, "-").toLowerCase();

    dispatch(fetchProductDetails(product.id));
    history.push(
      `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="m-auto bg-light_gray border-b pb-4 text-center">
        <Heading variant="h2">BESTSELLER PRODUCTS</Heading>
      </div>
      <div className="flex flex-col md:flex-row items-center md:w-full md:justify-between  md:px-[10%] flex-wrap md:content-start">
        {bestSeller.map((bestItem, index) => {
          return (
            <ShopPageCard
              key={index}
              name={bestItem.name}
              description={bestItem.description}
              src={bestItem.images[0].url}
              price={bestItem.price}
              onClick={() => handleProductClick(bestItem)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoreProducts;
