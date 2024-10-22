import BlogCard from "@/components/BlogCard";

const Blog = () => {

    return (

        <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row justify-between">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}
export default Blog;