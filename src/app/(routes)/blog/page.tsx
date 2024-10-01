
import Articles from '@/src/components/BlogCompo/ArticleComponent/article'
import BlogOverview from '@/src/components/BlogCompo/BlogCards/BlogOverview'
import ContactForm from '@/src/components/BlogCompo/ContactForm/ContactForm'
import Projects from '@/src/components/BlogCompo/projectsComponent/projects'
import React from 'react'

export async function getBlogs() {
  const url = `${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogs`;
  const response = await fetch(url, {
    cache: "no-store",
  });
  // console.log(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const  page = async() => {
  const data = await getBlogs();
  return (
    <div className=' mt-[200px]' >
      <BlogOverview/>
      <Projects/>
      <Articles data={data} />
      <ContactForm/>
    </div>
  )
}

export default page