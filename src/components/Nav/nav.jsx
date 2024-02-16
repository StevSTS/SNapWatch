import { useRef } from 'react'
import './nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {


    const ulnav = useRef()
    const line1 = useRef()
    const line2 = useRef()
    const line3 = useRef()
    const xbtn = useRef()

    function awd() {
        ulnav.current.style.opacity = "1"
        ulnav.current.style.visibility = "visible"
        ulnav.current.style.right = "0px"
        ulnav.current.style.transitionDuration = ".5s"
        line3.current.style.display = "none"
        line1.current.style.rotate = "-45deg"
        line2.current.style.rotate = "45deg"
        line1.current.style.position = "absolute"
        line1.current.style.top = "9.5px";
        line2.current.style.transitionDuration = ".3s"
        line1.current.style.transitionDuration = ".3s"
    }

    function dwa() {
        ulnav.current.style.right = "-350px"
        ulnav.current.style.visibility = "hidden"
        ulnav.current.style.opacity = "0"
        line2.current.style.rotate = "0deg"
        line1.current.style.rotate = "0deg"
        line1.current.style.position = "unset"
        line1.current.style.top = "0px";
        line3.current.style.display = "block"
    }


    return (
        <nav className=" w-full text-black  pt-10  max-md:px-0">
            <div className="container w-[1295px] max-md:w-[540px] max-xl:w-[960px] max-2xl:w-[1140px] max-lg:w-[720px] max-sm:w-[100%] ">
                <div className="contentnav flex items-center justify-between">
                    <div>
                        <Link to="/"  className="text-[26px] font-[700]">Solicitor</Link>
                    </div>
                    <div className='ms-[66px] '>
                        <div onClick={()=>{awd()}}  className='thebase absolute max-lg:right-10 max-lg:top-[46px] cursor-pointer hidden max-lg:block   '>
                            <div ref={line1} className='bg-white w-[28px] h-[2px] '></div>
                            <div ref={line2} className='themiddle bg-white w-[28px] h-[2px] my-[10px] duration-300'></div>
                            <div ref={line3} className='bg-white w-[28px] h-[2px] '></div>
                        </div>
                        <ul  ref={ulnav} className="flex items-center font-sans0o font-[100] text-[14px] text-[#ffffffb3]  max-lg:flex-col ms-7 max-lg:right-[-350px] max-lg:bg-white max-lg:text-black max-lg:h-[100vh] max-lg:top-0 max-lg:fixed max-lg:w-[300px] max-lg:items-start  ">
                            <div onClick={()=>{dwa()}} ref={xbtn} className='cursor-pointer hidden max-lg:block py-7 px-10 absolute right-0  '>
                                <div className='after:bg-black after:h-[30px] after:w-[2px] after:absolute after:right-10 after:top-4 after:rotate-[-45deg]'></div>
                                <div className='before:bg-black before:h-[30px] before:w-[2px] before:absolute before:top-4 before:right-10 before:rotate-45'></div>
                            </div>
                            <li><NavLink to="/" className="nav-link max-lg:text-[#037ef3] cursor-pointer p-[10px] max-lg:px-[20px] max-lg:mt-20 max-lg:ps-10 text-black hover:text-white duration-300">Home</NavLink></li>
                            <li className="relative">
                                    <a className="practicingbtn hover:text-white duration-300 text-black cursor-pointer p-[10px] pe-[20px] relative max-lg:hover:text-[#037ef3] max-lg:py-[5px] max-lg:px-[20px] max-lg:ps-10 ">Practicing Area
                                    <div className='absolute top-[15px] right-0 max-lg:hidden '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                    </div>
                                    </a>
                                    
                                <ul className="absolute bg-white py-[20px] text-black w-[180px] rounded-lg  left-0 top-20 duration-300 opacity-0 invisible max-lg:hidden ">
                                    <li><a className="cursor-pointer hover:text-blue-500 block duration-300 px-[20px]  ">Menu One</a></li>
                                    <li><a className="cursor-pointer hover:text-blue-500 block duration-300 px-[20px] py-[12px] ">Menu Two</a></li>
                                    <li className='relative'>
                                        <a className="practicingbtn2 cursor-pointer hover:text-blue-500 block duration-300 px-[20px] relative ">Dropdown 
                                        <div className='absolute top-[6px] right-[25px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="10" width="6.25" viewBox="0 0 320 512"><path fill="#000000" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                                        </div>
                                        </a>
                                        <ul className='absolute bg-white py-[20px] text-black w-[180px] rounded-lg left-[100%] top-[40px] duration-300 opacity-0 invisible'>
                                            <li><a className='cursor-pointer hover:text-blue-500 block duration-300 px-[20px]'>Sub Menu One</a></li>
                                            <li><a className='cursor-pointer hover:text-blue-500 block duration-300 px-[20px] py-[12px]'>Sub Menu Two</a></li>
                                            <li><a className='cursor-pointer hover:text-blue-500 block duration-300 px-[20px]'>Sub Menu Three</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="hover:text-white duration-300 cursor-pointer p-[10px]  max-lg:hover:text-[#037ef3] max-lg:py-[5px] max-lg:px-[20px] max-lg:ps-10 text-[#d8d8d8b3] ">Services</a></li>
                            <li><NavLink  to="/about" className="nav-link hover:text-white duration-300 cursor-pointer p-[10px]  max-lg:hover:text-[#037ef3] max-lg:py-[5px] max-lg:px-[20px] max-lg:ps-10 text-[#d8d8d8b3]">About</NavLink></li>
                            <li><a className="hover:text-white duration-300 cursor-pointer p-[10px]  max-lg:hover:text-[#037ef3] max-lg:py-[5px] max-lg:px-[20px] max-lg:ps-10 text-[#d8d8d8b3]">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='max-lg:me-20'>
                        <a className="flex items-center gap-3 cursor-pointer">
                            <div className="bg-[#ffffff33] w-[40px] h-[40px] flex items-center justify-center rounded-full border-[2px] border-transparent hover:border-white duration-300 hover:bg-transparent ">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                            </div>
                            <span>123-489-9381</span>
                        </a>
                    </div>



                </div>
            </div>
        </nav>
    )
}