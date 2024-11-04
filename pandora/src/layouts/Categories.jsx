import CategoryCard from "@/components/CategoryCard";
import CategoryTop from "@/components/CategoryTop";
import { useSelector } from "react-redux";

const Categories = () => {
    const fetchState = useSelector((store) => store.product.fetchState);
    const categories = useSelector((store) => store.product.categories);
    const topCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

    if (fetchState === 'FETCHING') {
        return <span className="loader"></span>;
    }

    if (fetchState === 'FAILED') {
        return <p>Failed to load products.</p>;
    }

    return (
        <>
            <div className="bg-light_gray md:px-[10%] py-6">
                <CategoryTop />
            </div>
            <div className="flex flex-col items-center gap-0 md:flex-row flex-wrap justify-between bg-light_gray md:px-[10%] md:pb-12 row-gap-4 ">

                {topCategories?.map((topcat) => {
                    return <CategoryCard
                        category={topcat.code}
                        key={topcat.id}
                        title={topcat.title}
                        src={topcat.img}
                        gender={topcat.gender === "e" ? "erkek" : "kadın"} />
                })}

            </div>
        </>
    )
}

export default Categories;