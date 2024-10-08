
"use client";
import { Github, Mail, Twitter, Webhook } from "lucide-react";
import Link from "next/link";
// import { Navigation } from "../../../components/nav";
import { Card } from "./card";
import SubmitForm from '@/src/components/submit-form';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import ContactForm from "@/src/components/contactCard/ContactForm";
// import Particless from "@/src/components/Particle";

// const socials = [
//   {
//     icon: <Webhook size={20} />,
//     href: "https://www.iseyon.com",
//     label: "Iseyon",
//     handle: "Iseyon",
//   },
//   {
//     icon: <Mail size={20} />,
//     href: "mailto:prerit.padhy@iseyon.com",
//     label: "Email",
//     handle: "prerit.padhy@iseyon.com",
//   },
//   {
//     icon: <Github size={20} />,
//     href: "https://github.com/ppiseyon.com",
//     label: "Github",
//     handle: "xCaria",
//   },  
// ];

export default function Example() {
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
    // <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
    // 	{/* <Navigation /> */}
    // 	<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
    // 		<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
    // 			{socials.map((s) => (
    // 				<Card>
    // 					<Link
    // 						href={s.href}
    // 						target="_blank"
    // 						className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
    // 					>
    // 						<span
    // 							className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
    // 							aria-hidden="true"
    // 						/>
    // 						<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
    // 							{s.icon}
    // 						</span>{" "}
    // 						<div className="z-10 flex flex-col items-center">
    // 							<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
    // 								{s.handle}
    // 							</span>
    // 							<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
    // 								{s.label}
    // 							</span>
    // 						</div>
    // 					</Link>
    // 				</Card>
    // 			))}
    // 		</div>
    // 	</div>
    // </div>
    <motion.div
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       variants={fadeInUpAnimation}
       className="text-white mt-[100px]">

        {/* xcaria info  */}

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif">Let’s work together</h1>
          <h3 className="text-2xl">Schedule a one-on-one discovery call with our team of data experts.</h3>
          <div className="flex px-40 justify-between">
          <h4 className="text-lg " ><b>Email: </b>   info@iseyon.com</h4>
          <h4 className="text-lg "><b>Phone: </b>   (651) 503-9126</h4>
          </div>
        </div>

        {/* Contact form  */}
      
      <ContactForm/>
    </motion.div>
  );
}
