import BlogCard from "@/components/BlogCard";

const Blog = () => {

    return (

        <section className="flex flex-col flex-wrap items-center gap-3 md:flex-row justify-between">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
    )
}
export default Blog;