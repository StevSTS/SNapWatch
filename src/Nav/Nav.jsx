import { FaBars } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/imgs/logo.png'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {

    const nav = useRef()


  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= 150) {
        nav.current.style.backdropFilter = "blur(10px)"
        nav.current.style.boxShadow = "0 25px 50px -12px rgb(0 0 0 / 0.25)"
        nav.current.style.height = "100px"
    }else{
        nav.current.style.background = "transparent"
        nav.current.style.boxShadow = "none"
        nav.current.style.height = "0"

      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);




  const [ sideBar , setSideBar ] = useState()

  async function getDataSideBar() {
      let res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=a979dad642f942e2f0d046021b704b36`)
      let data = await res.json()
      setSideBar(data.genres)
  }
  
  useEffect(()=>{
      getDataSideBar()
  },[])


  const navBa = useRef()
  const overLayNav = useRef()
  
function changeClass() {
  navBa.current.classList.toggle("Category")
  overLayNav.current.style.height = "100vh"
  overLayNav.current.style.backdropFilter = "blur(10px)"
}
function overla() {
  navBa.current.classList.remove("Category")
  overLayNav.current.style.height = "0"
  
}

  return (
    <nav ref={nav} className='fixed z-[9999999] h-0 duration-300 text-white w-full top-0 '>
        <div className='container'>
            <div className='flex items-center justify-between '>
                <div className="ms-16">
                    <Link to={'/'} className='logo active:scale-[.97] duration-300 w-[100px] cursor-pointer flex items-center text-white '>
                        <img loading='lazy' src={logo} alt="logo-home" />
                        <h1 className="text-[22px] ps-3 py-6 ">SNapWatch</h1>
                    </Link>
                </div>
                <div className='pages me-24 '>
                    <ul className='flex items-center gap-4'>
                        <li><Link to={'/'} >Home</Link></li>
                        <li><Link to={'/favorites'} >Favorites</Link></li>
                        <div onClick={changeClass} className="cursor-pointer " >
                          <FaBars />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
            <div ref={overLayNav} onClick={overla} className='bg-[#32313149] absolute w-[100%] top-0 h-[0vh] '></div>
          <div ref={navBa} className=' duration-300 bg-[#123] shadow-lg h-[100vh] overflow-auto text-white w-[280px] absolute left-[-500px] top-0 '>
              <ul className=' mt-10 '>
                {
                  sideBar?.map((cate) => {
                    return (
                      <li><NavLink to={`/category/${cate.name}/${cate.id}`} className='cate hover:bg-[#ffffff96] duration-300 py-2 block my-2 mt-3 mx-3 ps-4 rounded-[10px] '>{cate.name}</NavLink></li>
                    )
                  })
                }
              </ul>
          </div>
    </nav>
  )
}

export default React.memo(Nav)