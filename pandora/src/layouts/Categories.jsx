import CategoryCard from "@/components/CategoryCard";
import CategoryTop from "@/components/CategoryTop";

const Categories = () => {


    return (
        <>
            <section className="bg-red-100">
                <CategoryTop />
            </section>
            <section className="flex flex-col items-center gap-0 md:flex-row flex-wrap justify-between bg-red-50">

                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />

            </section>
        </>
    )
}

export default Categories;