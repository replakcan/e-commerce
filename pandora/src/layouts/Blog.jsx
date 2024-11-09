import BlogCard from "@/components/BlogCard";
import Heading from "@/components/ui/heading";

const Blog = () => {

    return (
        <>
            <div className="text-center py-12">
                <Heading variant="h1">We Are All Around The World</Heading>
            </div>
            <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row justify-between pb-24">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}
export default Blog;