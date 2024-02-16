import { BiSearchAlt } from "react-icons/bi"; 
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import { Link, NavLink } from "react-router-dom";
const NavBar = ({children}) => {


  const api_key = "a979dad642f942e2f0d046021b704b36"

  const [ sideBar , setSideBar ] = useState()

  async function getDataSideBar() {
      let res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      let data = await res.json()
      setSideBar(data.genres)
  }
  
  useEffect(()=>{
      getDataSideBar()
  },[])
  



const iconsSearch = useRef()
const inp = useRef()




  return (
    <>

    <div className="w-full  ">
        <div className='flex' >


        <div className=" makescroll bg-[#123] w-[250px] h-full fixed z-[9000000000000] ">
            <Link to={'/'} className='logo active:scale-[.97] duration-300 w-[100px] cursor-pointer flex items-center text-white '>
              <img loading='lazy' src={logo} alt="logo-home" />
              <h1 className="text-[22px] ps-3 py-6 ">SNapWatch</h1>
            </Link>
            <div className="p-4 flex flex-col">
              {
                sideBar?.map((name , index) => {
                  return(
                  <NavLink className="NavLink text-white rounded-lg bg-[#123] p-3 px-6 mb-3 block hover:bg-[#126] cursor-pointer duration-300" to={`/category/${name.name}/${name.id}`}>
                    <span>{name.name}</span>
                  </NavLink>
                  )
                })
              }
            </div>
      </div>



          <div className="flex flex-col fixed z-[9000000000000] right-0 ">


            <div className=" z-[1000] w-[calc(100vw-250px)] h-[100px] bg-[#123] pe-10 flex items-center justify-end ">
              <div className="relative">
                <input ref={inp} onFocus={()=>{
                    iconsSearch.current.style.fontSize = "0"
                    inp.current.style.paddingInlineStart = "12px"
                }} className="bg-[#651355a9] duration-300 outline-none w-[320px] h-[45px] rounded-md ps-10 " placeholder="Search any Movies..." type="text" />
                <div ref={iconsSearch} className=" absolute duration-300 top-[50%] translate-y-[-50%] cursor-pointer p-3 icons text-[23px] text-white">
                  <BiSearchAlt />
                </div>
              </div>
            </div>

            




          </div>
          
        </div>
    </div>
    <div className="children pt-[98px] w-fit ms-auto relative ">
    <div className="bg-[#123] w-[50px] h-[80px] hidden absolute top-[72px] rounded-[20px] left-[-60px] "></div>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='bg-slate-800  '
        >
        {children}
    </motion.div>


</div>
    </>
  )
}

export default NavBar