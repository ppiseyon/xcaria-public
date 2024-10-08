"use client";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import Particle from './particleLog';
import Image from "next/image";
import Link from "next/link";
// import AnimatedTextWord from "@/src/components/ShowcaseCompo/animatedText";
// import Particles from "../../../components/particles";
import AnimatedTextWord from "@/src/components/ShowcaseCompo/animatedText";
import styles from "./page.module.css";
import { datas } from "@/src/components/ShowcaseCompo/datas";
// import { createClient } from "@/src/utils/supabase/server";
import Accordian from "@/src/components/Accordian/accordian";

import img1 from "@/public/DataGoverenance.webp";
import img2 from "@/public/Business Intelligent Chatbot.webp";
import img3 from "@/public/TextToImage.jpeg";
import img4 from "@/public/SqlGenerator.jpeg";
import img5 from "@/public/localChatbot.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// import { redirect } from "next/navigation";

// import { motion } from "framer-motion";

export default function RemoteMdxPage() {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   return redirect("/login");
  // }

  // const { data: activeSession } = await supabase.auth.getSession();

  // if (!activeSession.session) {
  // 	return redirect("/auth");
  // }

  // const { data: user } = await supabase.from("user").select("*").single();
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  // return <MDXRemote source={markdown} />

  // const fadeInUpAnimation = {
  //   hidden: {
  //     opacity: 0,
  //     y: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     delay: .2,
  //     y: -80,
  //     transition: {
  //       staggerChildren: .5,
  //       duration: .8,

  //     },
  //   },
  // };

  // return (
  //   <>
  //     <div className="flex items-center mt-36 justify-center text-white ">
  //       {/* <Particle id="part"/> */}
  //       {/* <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/> */}
  //       <AnimatedTextWord/>
  //         {/*  */}
  //     </div>

  //     {/* cards  */}
  //     <div className="flex flex-wrap gap-7 items-center justify-center mt-12 text-white text-center ">
  //     {datas.map((i,index) => (
  //       <div
  //         // initial="hidden"
  //         // whileInView="show"
  //         // viewport={{ once: true }}
  //         // variants={fadeInUpAnimation}
  //         className={`${styles.container} space-y-2`}
  //       >
  //         {/* image  */}
  //         <div className="flex justify-center items-center ">
  //           <div className="flex justify-center items-center bg-gradient-to-br from-cyan-500 to-green-400 h-16 w-16 rounded-xl">
  //             <Image src={i.img} alt="Image is getting loaded" width={40} height={40}/>
  //           </div>
  //         </div>

  //         {/* heading  */}
  //         <div><h3 className=" text-xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">{i.heading}</h3> </div>

  //         {/* desc  */}
  //         <div className={styles.descp}>
  //           <p className="text-xs">{i.descp}</p>

  //           {/* button  */}
  //           <Link href={`showcase/${index}`} className={`${styles.view} relative inline-flex h-10 overflow-hidden rounded-full p-[1px] `}>
  //             <span className={`${styles.span1} absolute inset-[-1000%] animate-[spin_2s_linear_infinite] `}/>
  //             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
  //               Learn More about {i.heading}
  //             </span>
  //           </Link>
  //         </div>
  //       </div>
  //     ))}
  //     </div>
  //   </>
  // );

  const [open, setOpen] = useState<null | number>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const items = [
    {
      img: img1,
      title: "Data Governance Chatbot",
      subTitle:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
      descp:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
    },
    {
      img: img2,
      title: "Business Intelligent Chatbot",
      subTitle:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
      descp:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
    },
    {
      img: img3,
      title: "Text to image generation",
      subTitle:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
      descp:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
    },
    {
      img: img4,
      title: "SQL Generation",
      subTitle:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
      descp:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
    },
    {
      img: img5,
      title: "Local Cahtbot",
      subTitle:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
      descp:
        "A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.A data governance chatbot is an AI-powered tool designed to help organizations manage and enforce data governance policies in real-time. It assists users in understanding, accessing, and complying with data governance frameworks, ensuring data integrity, security, and compliance across the organization.",
    },
  ];

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="mt-28 px-52">
      <div className="flex flex-col items-center justify-center">
        <h2 className={styles.head}>Product</h2>
        <p className={styles.para}>
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>
      </div>
      <motion.div
        className="mt-10"
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        {items.map((data, index) => (
          <Accordian
            key={index}
            open={index === open}
            img={data.img}
            title={data.title}
            subTitle={data.subTitle}
            descp={data.descp}
            toggle={() => toggle(index)}
          />
        ))}
      </motion.div>
      <div className={styles.priceHeader2}>
        <h1>Be part of something bigger. Sign up now!</h1>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div>
          <Link href="/contact">
            <button className={twMerge("w-[180px] mt-8", "stroke-button")}>
              Connect with us →{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
