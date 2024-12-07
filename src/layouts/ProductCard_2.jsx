/* eslint-disable react/prop-types */
import FeatureContent from "@/components/FeatureContent";
import Heading from "@/components/ui/heading";
import { fetchProductDetails } from "@/redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductCard_2 = ({ mostPopi_2 }) => {
  const categories = useSelector((store) => store.product.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProductClick = (product) => {
    const productNameSlug = product.name.replace(/\s+/g, "-").toLowerCase();
    const category = categories.find((cat) => cat.id === product.category_id);
    const categoryName = category.code?.slice(2);

    dispatch(fetchProductDetails(product.id));
    history.push(
      `/shop/${category.gender === "k" ? "kadin" : "erkek"}/${categoryName}/${
        product.category_id
      }/${productNameSlug}/${product.id}`
    );
  };

  return (
    <div className="productCard_2 md:rounded-3xl overflow-hidden flex flex-col items-center gap-12 md:gap-0 ">
      <div className="prc1 h-full w-full bg-mars">
        <img
          className="w-full h-full object-cover"
          src="./images/productCard/home-card-pics-1.jpeg"
          alt=""
        />
      </div>

      <div
        onClick={() => handleProductClick(mostPopi_2)}
        className="prc2 h-full flex flex-col justify-center bg-light_gray p-8 text-center cursor-pointer transition-colors duration-300 hover:bg-gray-300"
      >
        <Heading variant="h3">MOST POPULAR</Heading>
        <p>{mostPopi_2?.description}</p>
        <div className="relative border rounded-xl overflow-hidden group">
          <img
            className="py-5 transition-transform duration-300 transform group-hover:scale-105 group-hover:blur-sm"
            src={mostPopi_2?.images[0].url}
            alt={`${mostPopi_2?.name}`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-brilliant text-lg font-bold">
              click to see <br />
              product details
            </p>
          </div>
        </div>

        <Heading variant="h4">{mostPopi_2?.name}</Heading>
        <p>${mostPopi_2?.price}</p>
      </div>

      <div className="prc3 hidden lg:block">
        <FeatureContent />
      </div>
    </div>
  );
};

export default ProductCard_2;
