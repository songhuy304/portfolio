import React , { useEffect } from 'react'
import AOS from 'aos';


import 'aos/dist/aos.css';
import htmlIcon  from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import bootstrapicon from '../assets/bt.png';
import reacticon from '../assets/react.png';
import tailwin from '../assets/tailwin.png';
import { AiOutlineThunderbolt ,AiOutlineAntDesign  } from "react-icons/ai";

// icon Be
import java  from '../assets/java.png';
import sqlsever from '../assets/sql.png';
import net from '../assets/net.png';
import node from '../assets/nodejs.png';
import mysql from '../assets/mysql.png';
import mongo from '../assets/mongo.png';
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
      name:'Javascripts',
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
  { 
    id: 6,
    name:'Tailwincss',
    img: tailwin
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
{ 
  id: 6,
  name:'Mongo',
  img: mongo
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
      className="skill section relative bg-slate-100 md:h-screen height-[100%]"
    >
      <h1 data-aos="fade-down" className="font-bold text-center md:pt-10 pt-5 text-3xl relative">
        SOFTWARE SKILLS
      </h1>
      <p className="text-center text-gray-500 italic">My favorite skills</p>
      <div className="profile pb-16 flex md:gap-[5rem] md:mx-auto gap-[2rem] mt-7 flex-col md:my-16 md:mb-[10rem] h-full justify-center max-w-screen-lg md:flex-row">
        <div data-aos="fade-right" className="w-[420px] h-[420px]">
          <div className="flex items-center justify-center gap-1 mt-5 mb-5">
            <AiOutlineAntDesign />
            <h1 className="text-base font-[500]">Frontend Development</h1>
          </div>
          <div className="mt-2 flex gap-5 justify-center flex-wrap">
            {Fe.map((course) => (
              <div key={course.id} className="flex flex-col items-center gap-3">
                <button className="text-white bg-slate-200 p-5 md:p-8 rounded-full inline-flex items-center">
                  <img alt={course.name} src={course.img} className="w-14 grayscale hover:grayscale-0 object-cover transform scale-100 hover:scale-110 transition duration-300" />
                </button>
                <span className="font-serif text-lg text-gray-800 text-center">{course.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className="w-[420px] h-[420px]">
          <div className="flex items-center justify-center gap-1 mt-5 mb-5">
            <AiOutlineThunderbolt />
            <h1 className="text-base font-[500]">BackEnd Development</h1>
          </div>
          <div className="mt-2 flex gap-5 justify-center flex-wrap">
            {Be.map((course) => (
              <div key={course.id} className="flex flex-col items-center gap-3">
                <button className="text-white bg-slate-200 p-5 md:p-8  rounded-full  inline-flex items-center">
                  <img alt={course.name} src={course.img} className="w-14 grayscale hover:grayscale-0  transition-transform duration-300 transform hover:-translate-y-1 hover:scale-110" />
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