import CategoryCard from "@/components/CategoryCard";
import CategoryTop from "@/components/CategoryTop";

const Categories = () => {


    return (
        <>
            <div className="bg-light_gray md:px-[10%] py-6">
                <CategoryTop />
            </div>
            <div className="flex flex-col items-center gap-0 md:flex-row flex-wrap justify-between bg-light_gray md:px-[10%] md:pb-12">

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