import CategoryCard from "@/components/CategoryCard";
import CategoryTop from "@/components/CategoryTop";

const Categories = () => {


    return (
        <>
            <section>
                <CategoryTop />
            </section>
            <section className="flex flex-col items-center gap-2 md:flex-row flex-wrap justify-around">

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