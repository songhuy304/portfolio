import React , {useState} from 'react'

function Navbar() {


  const [headermenu, setHeaderMenu] = useState(false);
 const onToggleMenu = () => {
    setHeaderMenu(!headermenu);
   
  };
  return (
    <header className="bg-slate-100">
      <nav className="flex justify-around items-center py-[3vh]">
        <div className="font-bold text-2xl cursor-pointer">Portfo<span className="text-[#f46a07]">lio</span></div>
        <div className={`md:static absolute ${headermenu ? 'top-[5rem] z-[2]' : 'z-[-1] top-[-400px]'} bg-slate-100 md:bg-slate-100 md:z-auto z-[-1] transition-all duration-500 ease-in-out md:min-h-fit md:w-auto min-h-[30vh] left-0  w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-6">
            <li>
          
              <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#home">
                Home
              </a>
            </li>
            <li>
            
              <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#about">
                About
              </a>
            </li>
            <li>
             
              <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#skill">
                Skill
              </a>
            </li>
            <li>
           
              <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/">
                Project
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden md:inline-block bg-[#a6c1ee] text-white px-5 py-2 rounded-full transition duration-300 hover:bg-[#87acec]">
            Get Started
          </button>
          <svg
            onClick={onToggleMenu}
            className={`md:hidden block h-6 w-6 cursor-pointer ${
              headermenu ? "hidden" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            onClick={onToggleMenu}
            className={`md:hidden  h-6 w-6 ${headermenu ? "" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Navbar