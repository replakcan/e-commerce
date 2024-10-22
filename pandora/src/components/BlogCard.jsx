import React from 'react';
import Heading from './ui/heading';

const BlogCard = () => {
    return (
        <div className='blogCard border flex flex-col gap-2 p-1 w-min grow bg-orange-50'>
            <img src="https://placehold.co/350x350" alt="" />
            <div className='flex flex-col gap-3 p-8'>
                <nav className='flex gap-3'>
                    <a href="">Google</a>
                    <a href="">Trending</a>
                    <a href="">New</a>
                </nav>
                <Heading variant='h4'>Loudest à la Madison #1 (L'integral)</Heading>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, aperiam, alias ipsam facilis eius, dolores unde sunt maxime laboriosam recusandae voluptates illo nesciunt veritatis nemo dicta consectetur quo. Quos, quo!</p>
                <div className='flex justify-between'>
                    <div className="flex gap-2">
                        <i className="fa-solid fa-clock"></i>
                        <p>22 April 2021</p>
                    </div>
                    <div className="flex gap-2">
                        <i className="fa-solid fa-clock"></i>
                        <p>10 comments</p>

                    </div>
                </div>
                <a>Learn More</a>
            </div>
        </div>
    )
};

export default BlogCard;
