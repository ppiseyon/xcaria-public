import Articles from '@/src/components/BlogCompo/ArticleComponent/article'
import BlogOverview from '@/src/components/BlogCompo/BlogCards/BlogOverview'
import ContactForm from '@/src/components/BlogCompo/ContactForm/ContactForm'
import Projects from '@/src/components/BlogCompo/projectsComponent/projects'
import React from 'react'



const  page = () => {
  return (
    <div className='my-24 mt-[120px] ' >
      <BlogOverview/>
      {/* <Projects/> */}
      <Articles/>
      <ContactForm/>
    </div>
  )
}

export default page