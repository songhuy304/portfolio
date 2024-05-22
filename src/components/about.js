import React, { useEffect }  from 'react'
import Kid from '../assets/cart.jpg'
import AOS from 'aos';
import { MdOutlineEmail , MdOutlineLocalPhone , MdOutlineLocationOn  } from "react-icons/md";

import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Tăng thời gian thực hiện animation lên 3000ms
      easing: 'ease-out', // Sử dụng kiểu easing ease-out
    });

    // Nếu bạn muốn disable AOS khi component bị hủy
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div id="about" className="about section h-screen bg-white">
      <div className="container flex justify-center flex-col-reverse px-[20px] md:flex-row py-1 md:pt-40 gap-[30px]  ">
        <div data-aos="fade-right" className="">
          <div className="h-full overflow-hidden">
            <img src={Kid} alt="" className="md:w-[20rem] w-2/3" />
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col  gap-3">
          <h1 className="font-bold text-5xl text-[#f46a07] ">ABOUT ME</h1>
          <p className="font-medium text-sm text-gray-500 max-w-[30rem] mb-4">
            Hi there, welcome to look at my profile! In 1+ years of Frontend
            experience. I'm passionate about creating seamless user experiences
            and believe that simplifying code leads to more agile applications.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <MdOutlineEmail />
              <span className="font-semibold">songhuy304@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineLocalPhone />
              <span className="font-semibold">0914420455</span>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineLocationOn />
              <span className="font-semibold">HCM</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-3">
            <div
              data-aos="zoom-in-right"
              className="bg-slate-50 cursor-pointer rounded-md max-w-25 hover:bg-slate-200"
            >
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">01+</h3>
                <p className="text-center text-[1rem] text-gray-500">
                  Year Experience
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              className="bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-md max-w-25"
            >
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">5+</h3>
                <p className="text-center text-[1rem] text-gray-500">
                  Complete Project
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              className="bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-md max-w-25"
            >
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">24/7</h3>
                <p className="text-center text-[1rem] text-gray-500">
                  Online Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About