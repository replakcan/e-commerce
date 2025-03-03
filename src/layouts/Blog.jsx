import BlogCard from '@/components/BlogCard'
import Heading from '@/components/ui/heading'
import { blogCards } from '@/data'

const Blog = () => {
  return (
    <>
      <div className="text-center pt-8 pb-4">
        <Heading variant="h1">We Are All Around The World</Heading>
      </div>
      <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row justify-between py-16">
        {blogCards.map((blogcard) => {
          return (
            <BlogCard
              key={blogcard.blog_id}
              place={blogcard.place}
              description={blogcard.description}
              links={blogcard.links}
              date={blogcard.date}
              comment_count={blogcard.comment_count}
              src={blogcard.src}
            />
          )
        })}
      </div>
    </>
  )
}
export default Blog
