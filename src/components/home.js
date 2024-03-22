import React , { useEffect } from 'react'
import Navbar from './navbar'
import Cart from '../assets/kid.jpg'
import CV from '../assets/cv.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaGithub ,FaTwitter ,FaFacebook  } from "react-icons/fa";
function Home() {

  // Định nghĩa hàm handleDownload trong phạm vi của component Home
  const handleDownload = () => {
    // Đường dẫn đến file PDF của bạn
    const pdfFilePath = CV;
    
    // Tạo một thẻ a (anchor) ẩn và sử dụng nó để tải file PDF
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'cv.pdf'; // Tên mà file sẽ được lưu với
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    AOS.init({
      duration: 3000, // Tăng thời gian thực hiện animation lên 3000ms
      easing: 'ease-out', // Sử dụng kiểu easing ease-out
    });

    // Nếu bạn muốn disable AOS khi component bị hủy
    return () => {
      AOS.refresh();
    };
  }, []);

  
  return (
    <section id="home" className="section relative bg-slate-100 h-screen">
      <Navbar />
      <div className="profile flex md:gap-[5rem] flex-col md:pb-[10rem] h-full px-4  justify-center items-center max-w-screen-lg mx-auto md:flex-row">
        <div className="self-center text-center "  data-aos="fade-up">
          <p className="font-[600] text-[1.25rem]  text-gray-700 text-center">
            Hello, I'm
          </p>
          <h1 className="text-[3rem] font-[700]">Song Huy</h1>
          <p className="font-[600] text-gray-700 text-center mb-4 text-[1.75rem]">
            Frontend Developer
          </p>
          <div className="flex justify-center gap-[1rem]">
            <button   onClick={handleDownload} className="text-white bg-[#f46a07] px-4 py-2 rounded-full transition duration-300 hover:bg-[#f7a66c] inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </button>
            <button className="text-black rounded-full px-4 py-2 transition duration-300 border-2 border-[#353535] hover:bg-[#353535] hover:text-white">
              Contact Info
            </button>
          </div>
          <div className="flex justify-center mt-[1rem] gap-[1rem]">
            <FaGithub className="w-8 h-8 cursor-pointer" />
            <FaTwitter className="w-8 h-8 cursor-pointer" />
             <FaFacebook className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
        <div  data-aos="fade-left" className=" ">
          <img
            src={Cart}
            alt=""
            className="border-solid border-2 border-[#f46a07] rounded-full mx-auto w-2/3 mt-8 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Home