import React , { useEffect } from 'react'
import AOS from 'aos';


import 'aos/dist/aos.css';
import htmlIcon  from '../assets/file_type_html_icon_130541.png';
import cssIcon from '../assets/file_type_css_icon_130661.png';
import jsIcon from '../assets/js.png';
import bootstrapicon from '../assets/bootstrap.png';
import reacticon from '../assets/react.png';
import { AiOutlineThunderbolt ,AiOutlineAntDesign  } from "react-icons/ai";

// icon Be
import java  from '../assets/java.png';
import sqlsever from '../assets/sqlsever.png';
import net from '../assets/net.png';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
const Fe = [
  {   
      id: 1,
      name:'HTML',
      img: htmlIcon,
  }, 
  { 
      id: 2,
      name:'CSS',
      img: cssIcon
  }, 
  { 
      id: 3,
      name:'javascripts',
      img: jsIcon
  }, 
  { 
      id: 4,
      name:'Bootstrap',
      img: bootstrapicon
  },
  { 
      id: 5,
      name:'ReactJs',
      img: reacticon
  },

]

const Be = [
{   
  id: 1,
  name:'Java',
  img: java,
}, 
{ 
  id: 2,
  name:'.Net',
  img: net
}, 
{ 
  id: 3,
  name:'MySql',
  img: mysql
}, 
{ 
  id: 4,
  name:'SQLSever',
  img: sqlsever
},
{ 
  id: 5,
  name:'Node Js',
  img: node
},
]

function Skill() {
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
    <section
      id="skill"
      className="skill section relative bg-slate-100 h-screen"
    >
      <h1 data-aos="fade-down" class="font-bold text-center md:pt-10 pt-5 text-3xl relative">
        SOFTWARE SKILLS
      </h1>
      <p className="text-center text-gray-500 italic">My favorite skills</p>
      <div className="profile pb-16 flex md:gap-[5rem] flex-col md:my-16 md:mb-[10rem] h-full px-4 justify-center max-w-screen-lg mx-auto md:flex-row">
        <div data-aos="fade-right" className="w-[420px] h-[420px]">
          <div class="flex items-center justify-center gap-4 mb-5">
            <AiOutlineAntDesign />
            <h1 class="text-base font-[500]">Frontend Development</h1>
          </div>
          <div className="mt-2 flex gap-10 justify-center flex-wrap">
            {Fe.map((course) => (
              <div key={course.id} className="flex flex-col items-center gap-3">
                <button className="text-white bg-slate-200 px-5 py-8 rounded-full inline-flex items-center">
                  <img alt={course.name} src={course.img} className="w-14 transform scale-100 hover:scale-110 transition duration-300" />
                </button>
                <span className="font-serif text-lg text-gray-800 text-center">{course.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className="w-[420px] h-[420px]">
          <div class="flex items-center justify-center gap-4 mb-5">
            <AiOutlineThunderbolt />
            <h1 class="text-base font-[500]">Frontend Development</h1>
          </div>
          <div className="mt-2 flex gap-10 justify-center flex-wrap">
            {Be.map((course) => (
              <div key={course.id} className="flex flex-col items-center gap-3">
                <button className="text-white bg-slate-200 px-5 py-8 rounded-full  inline-flex items-center">
                  <img alt={course.name} src={course.img} className="w-14 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-110" />
                </button>
                <span className='font-serif text-lg text-gray-800 text-center'>{course.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill