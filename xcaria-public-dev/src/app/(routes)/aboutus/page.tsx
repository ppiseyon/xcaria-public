// import React from 'react'
'use client'
import Image from "next/image";
import chandan from "@/public/Chandan.png";
import walter from '@/public/Walter.png'
import tom from "@/public/tom.jpg";
import kayel from '@/public/kayel.png'
// import styles from "@/src/app/(routes)/showcase/page.module.css";
import AboutPageHeading from "@/src/components/AboutPageHeading";
import { motion } from "framer-motion";
import Teamcard from "@/src/components/TeamCard/Teamcard";
import styles from './about.module.css'

function Aboutpage() {


  const TeamData = [
    {
      img:chandan,
      name:'Chandan Pandey',
      position:'Founder & CEO',
      posts:'285',
      followers:'120k',
      following:'175'
    },
    {
      img:walter,
      name:'Walter Reis',
      position:'Founder & CEO',
      posts:'285',
      followers:'120k',
      following:'175'
    }, {
      img:kayel,
      name:'Kyle Nelson',
      position:'Founder & CEO',
      posts:'285',
      followers:'120k',
      following:'175'
    }, {
      img:tom,
      name:'Thomas Niccum',
      position:'Founder & CEO',
      posts:'285',
      followers:'120k',
      following:'175'
    }
    
  ]
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      delay: .2,
      y: -10,
      transition: {
        staggerChildren: .5,
        duration: .7,

      },
    },
  };

  return (
    <div className= "mt-[100px] space-y-11 text-white text-center p-5">

    {/* About us  */}
      <motion.div 
        initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUpAnimation}
      >
        {/* <AboutPageHeading text="About Us" /> */}
        <div className="flex flex-col items-center justify-center">
        <h2 className={styles.head}>About Us</h2>
        <p className={styles.para}>
        We are dedicated to delivering innovative solutions that empower businesses to thrive in a digital world.
        </p>
      </div>

        <div className=" text-[0.8rem] px-24 text-justify space-y-4 mt-11 ">
          {/* <p>
          Welcome to Xcaria, an innovative AI venture dedicated to
          transforming the way businesses and individuals interact with
          technology. Our mission is to provide a suite of powerful AI tools
          that streamline processes, enhance creativity, and empower data-driven
          decision-making. Xcaria offers a comprehensive range of features,
          including text-to-image generation, SQL generation, local chatbots,
          data governance chatbots, and business intelligence chatbots. Each
          component is meticulously designed to address specific needs, making
          complex tasks simpler and more accessible.
        </p> */}
          <p>
            Revolutionize your corporation's workflow and performance by
            investing in the development of internal applications. Tailored to
            meet your specific business needs, these applications act as
            catalysts for enhanced efficiency, streamlined processes, and
            optimized collaboration among your teams. Experience a significant
            boost in productivity as tasks are automated, communication becomes
            seamless, and critical processes are streamlined. Our internal
            applications are meticulously crafted to align with your corporate
            goals, ensuring a tailored solution that fits seamlessly into your
            unique operational landscape.
          </p>
          <p>
            At the core of Xcaria is our text-to-image generation technology,
            which enables users to create stunning visuals from textual
            descriptions. This feature opens up new possibilities for content
            creators, marketers, and designers by turning written ideas into
            high-quality images quickly and effortlessly. Whether you need
            custom graphics for a marketing campaign or visualizations for a
            project, our text-to-image tool delivers precise results that meet
            your creative needs.
          </p>
          <p>
            {" "}
            Xcaria also includes sophisticated tools for data management with
            our SQL generation and data governance chatbots. The SQL generation
            tool automates the creation of complex database queries, allowing
            users to efficiently extract and analyze data without needing
            advanced coding skills. Complementing this, our data governance
            chatbot offers expert guidance on best practices for data management
            and compliance, helping organizations maintain data integrity and
            adhere to regulatory standards.
          </p>
          <p>
            Additionally, our local and business intelligence chatbots are
            designed to provide tailored support and actionable insights. The
            local chatbot adapts to the specific needs of individual users or
            localized settings, offering personalized assistance and enhancing
            user experience. Meanwhile, the business intelligence chatbot
            delivers in-depth analytics and strategic recommendations, enabling
            informed decision-making based on comprehensive data insights.
            Together, these features make Project Xcaria a versatile and
            indispensable tool for modern businesses, driving innovation and
            efficiency across various domains.
          </p>
          <p>
            Embrace the agility of low-code solutions to expedite the
            development and deployment of internal applications. Our expertise
            in leveraging low-code platforms empowers your organization to
            achieve faster time-to-market, reducing development cycles and
            costs.With an intuitive visual interface and pre-built components,
            low-code development accelerates the creation of robust internal
            applications. By adopting internal applications and low-code
            solutions, you future-proof your organization for sustained success
            and continuous improvement. Our solutions are designed to evolve
            with your business, providing scalability, flexibility, and
            adaptability. As your corporation grows and transforms, our internal
            applications remain agile, ensuring they align seamlessly with your
            changing needs. Embrace the future of corporate innovation with our
            comprehensive internal application and low-code solutions.
          </p>
        </div>
      </motion.div>

      {/* Our team  */}
      <motion.div
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       variants={fadeInUpAnimation}>
        <div className="mt-20">
        <AboutPageHeading text="Meet our team" />
        </div>
        <div className=" flex justify-center gap-16 items-center flex-wrap h-full mt-24 px-32">
        {
          TeamData.map((data)=>(
            <Teamcard img={data.img} name={data.name} position={data.position} posts={data.posts} followers={data.followers} following={data.following} />
          ))
        }
        </div>
      </motion.div>

      {/* Our Vision */}
      <motion.div
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       variants={fadeInUpAnimation}>
        <div className='mt-24'>
        <AboutPageHeading text="Our Vision" />
        </div>
        <div className="mx-2  px-24   mt-11 text-justify space-y-4">
          <h2 className="text-2xl">Vision, Leadership, Consistency</h2>
          <h3 className="text-xl">
            Closing the gap between business leaders and technology professionals
          </h3>
          <p className="text-[0.8rem] ">
            To assist in the integration of Business Intelligence solutions, our
            organization fosters collaborative relationships with companies of
            all sizes around the world. Our exceptional value for our customers
            distinguishes us from the competition. Xcaria offers a lean
            industrialized delivery model to help our clients achieve their
            objectives.
          </p>
        </div>
      </motion.div>
      
    </div>
  );
}

export default Aboutpage;
