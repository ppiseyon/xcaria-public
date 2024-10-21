'use client'
import React from 'react'
import Image from 'next/image'
import Profilepic from '../../public/patrickBravo.jpeg'
// import { getAllPosts } from '@/src/app/lib/mdx'
import blogstyle from './blog.module.css'
const BlogOverview = () => {
  // const posts =await getAllPosts();

  return (
    <div className={blogstyle.head}>
        {/* <div className='flex flex-col items-center justify-center gap-4'>
           <Image src={Profilepic}
           width={110} 
           height={110}
           alt='profilepic'
           className='rounded-full border-2 border-slate-400 mt-10'/>
        </div> */}
        {/* <p className={blogstyle.bloglogo}>
            EXPLORE  BLOGS 
        </p> */}

        {/* <h2 className={blogstyle.bloglogo}><span>EXPLORE</span><span> BLOGS</span></h2> */}
        <h2 className={blogstyle.bloglogo}><span className='text-white'>E</span><span className='text-white'>x</span><span className='text-white'>p</span><span className='text-white'>l</span><span className='text-white'>o</span><span className='text-white'>r</span><span className='text-white'>e</span><span> </span><span>B</span><span>l</span><span>o</span><span>g</span><span>s</span></h2>
       <p className='text-center text-1xl'>“Discover insightful articles on a variety of topics, from technology to lifestyle.”</p>
    </div>
  )
}

export default BlogOverview