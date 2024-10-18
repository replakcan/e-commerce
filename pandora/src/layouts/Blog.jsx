import BlogCard from "@/components/BlogCard";

const Blog = () => {

    return (

        <section className="flex flex-col items-center gap-3 md:flex-row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
    )
}
export default Blog;