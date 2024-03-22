import React from 'react'

import { GoArrowRight } from "react-icons/go";

const projects = [{
    id: 1 ,
    ten: "Profile",
    img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65fcdffabacba4b4fb4873b8/screenshot_2024-03-22-01-35-11-0000.webp&fit=cover&h=330&w=528",
    linkgithub: "http://",
    linkDemo: "https://myportfoliosonghuy.netlify.app/"
},
{
    id: 2 ,
    ten: "Website SpingBoot",
    img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
    linkgithub: "http://"
},
{
    id: 3 ,
    ten: "Website Quiz",
    img: "https://img.freepik.com/free-vector/quiz-landing-page-design-website-banner-vector-template-kids-playing-online-trivia-quiz-learning-games_453374-357.jpg",
    linkgithub: "http://",
    linkDemo: "http://",

},
{
    id: 34 ,
    ten: "ReactJs Furniture Shop",
    img: "https://th.bing.com/th?id=OIF.U00%2bNWMMgZ9YvSM3YO8Z2g&rs=1&pid=ImgDetMain",
    linkgithub: "http://"
},
{
    id: 342 ,
    ten: "Website Watch .Net",
    img: "https://media.shopdongho.com/2023/04/casio-new.png",
    linkgithub: "http://"
}
]
function Project() {
   
  return (
    <section id="project" className="project section relative bg-white">
        <h1 data-aos="fade-down" className="font-bold text-center md:pt-8 pt-5 text-3xl relative">
        PROJECTS
      </h1>
      <p className="text-center text-gray-500 italic">A few recent projects</p>
     
      <div  className="container md:pb-7 pb-7 mx-auto flex md:flex-row md:mt-4 items-center flex-col md:flex-wrap gap-5">
        {/* item 1 */}
       
        {projects.map((project) => (
           
          <div
            key={project.id}
            className=" flex w-full max-w-[19rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img src={project.img} alt={project.ten} className="" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {project.ten}
                </h5>
              </div>
            </div>
            <div className="flex p-5 gap-3">
              <button className=" border-2 gap-2 px-4 py-2 rounded-lg transition border-[#969393] duration-300 hover:text-white hover:bg-[#969393] inline-flex items-center">
                <span>Github</span>
                <GoArrowRight />
              </button>
              <a href={project.linkDemo}   className="border-2 gap-2 px-4 py-2 rounded-lg transition border-[#969393] duration-300 hover:text-white hover:bg-[#969393] inline-flex items-center">
                <span>Livedemo</span>
                <GoArrowRight />
              </a>
            </div>
          </div>
        
        ))}
      
     
      </div>
    
    </section>
  );
}

export default Project




