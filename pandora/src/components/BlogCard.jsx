/* eslint-disable react/prop-types */
import Heading from './ui/heading';
import { Button } from './ui/button';
import { CalendarHeart, MessageCircleMore } from 'lucide-react';

const BlogCard = ({ src, place, description, links, date, comment_count }) => {
    return (
        <div className='blogCard border flex flex-col gap-2 p-1 md:w-min grow w-[80%]'>
            <div className='w-max-[350px] aspect-[16/9] overflow-hidden'>
                <img className='w-full h-full object-cover' src={src} alt="" />
            </div>
            <div className='flex flex-col gap-3 p-8'>
                <nav className='flex gap-3'>
                    {links.map((link, index) => {
                        return <i
                            key={index}
                            className={link}>
                        </i>
                    })}
                </nav>
                <Heading variant='h4'>{place}</Heading>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <div className="flex gap-2 items-center">
                        <CalendarHeart />
                        <p>{date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MessageCircleMore />
                        <p>{comment_count} comments</p>

                    </div>
                </div>
                <Button variant="link">Learn More</Button>
            </div>
        </div>
    )
};

export default BlogCard;
