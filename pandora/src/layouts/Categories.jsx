import CategoryCard from "@/components/CategoryCard";
import CategoryTop from "@/components/CategoryTop";

const Categories = () => {


    return (
        <>
            <div className="bg-red-100">
                <CategoryTop />
            </div>
            <div className="flex flex-col items-center gap-0 md:flex-row flex-wrap justify-between bg-red-50">

                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />

            </div>
        </>
    )
}

export default Categories;