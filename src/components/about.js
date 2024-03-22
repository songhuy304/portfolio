import React, { useEffect }  from 'react'
import Kid from '../assets/cart.jpg'
import AOS from 'aos';


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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
          <div className="flex md:flex-row flex-col  gap-2">
            <div classname="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1  cursor-pointer">
              <div classname=" rounded-full flex h-full w-full  bg-white back hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <h2 classname="text-[1.25rem] text-black px-4 py-1">
                  songhuy304@gmail.com
                </h2>
              </div>
            </div>

            <div classname="w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 cursor-pointer">
              <div classname=" rounded-full flex h-full w-full  bg-white back hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <h2 classname="text-[1.25rem] text-black px-4 py-1">
                  Đặng Song Huy
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-3">
          <div  data-aos="zoom-in-right" classname="bg-slate-50 cursor-pointer rounded-md max-w-25 hover:bg-slate-200">
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">
                  02+
                </h3>
                <p className="text-center text-[1rem] text-gray-500">Year Experience</p>
              </div>
            </div>
            <div data-aos="zoom-in-up" classname="bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-md max-w-25">
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">
                  10+
                </h3>
                <p className="text-center text-[1rem] text-gray-500">Complete Project</p>
              </div>
            </div>
            <div  data-aos="zoom-in-left" classname="bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-md max-w-25">
              <div className="py-3 px-4">
                <h3 className="text-center font-bold text-[1.75rem]">
                  24/7
                </h3>
                <p className="text-center text-[1rem] text-gray-500">Online Support</p>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default About