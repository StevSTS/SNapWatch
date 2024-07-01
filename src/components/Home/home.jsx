import { AiFillHeart } from "react-icons/ai"; 
import { AiTwotoneHeart } from "react-icons/ai"; 
import { BiHeart } from "react-icons/bi"; 
import { BiPlay } from "react-icons/bi"; 
import { BiPlayCircle } from "react-icons/bi"; 
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useRecoilState } from "recoil";
import FavouriteMovies from "../../Atom/Favourite/Favourite";
import Slider from "../HomeSliders/Slider";

const Home = () => {
    const [popularMovies , setPopularMovies] = useState([]);
    const [activeIndex , setActiveIndex] = useState(0);
    const [activeMovieInfo, setActiveMovieInfo] = useState(null);

    async function getDataPopoluarMovies() {
        let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a979dad642f942e2f0d046021b704b36&page=1");
        let data = await res.json();
        setPopularMovies(data.results);
        setActiveMovieInfo(data.results[activeIndex]);
    }

    useEffect(() => {
        getDataPopoluarMovies();
    }, []);

    const banner = useRef()


    function wadawd() {
        banner.current.style.opacity = "0"
        setTimeout(()=>{
            banner.current.style.opacity = "1"
        },200)
        
        
    }

    const [upComingMovies , setUpComingMovies] = useState()
    const [trendingMovies , setTrendingMovies] = useState()
    const [topMovies , setTopMovies] = useState()
    

    async function getDataAllMovies() {
            let UpComingres = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a979dad642f942e2f0d046021b704b36&page=1`);
            let UpComingdata = await UpComingres.json();
            setUpComingMovies(UpComingdata.results)


            let Trendingres = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a979dad642f942e2f0d046021b704b36&page=1`);
            let Trendingdata = await Trendingres.json();
            setTrendingMovies(Trendingdata.results)
        
        
            let Topres = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a979dad642f942e2f0d046021b704b36&page=1`);
            let Topdata = await Topres.json();
            setTopMovies(Topdata.results)
    }
    
    useEffect(() =>{
        getDataAllMovies()
        if (window.innerWidth === 495) {
            // Execute your code here
            console.log("Screen width is exactly 495 pixels.");
            alert('now its 495px')
            // Place your specific actions or function calls here
          }
    }, [])






  const like = useRef()

      

    return (
        <>
        <section>
                <div className='content relative  '>
                    <div ref={banner} className="duration-[.2s]">

                        <div className='imgbgaft after:bg-gradient-to-r from-[#01022de5]  to-transparent after:opacity-[.8] after:absolute after:inset-0'>
                            <div className="h-[100vh] w-full bg-cover bg-top " style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${activeMovieInfo?.backdrop_path})`}} ></div>
                        </div>
            <div className="container">
                        <div className='Info text-white absolute top-[50%] translate-y-[-60%] ml-10 max-sm:m-0'>
                            <h2 className='mb-5 text-[35px] font-bold '>{activeMovieInfo?.title}</h2>
                            <div className='flex items-center gap-5 mb-5 '>
                                <p className='font-[500]'>{activeMovieInfo?.release_date}</p>
                                <span className='bg-[#787878] font-bold px-2 rounded-full py-1 '>{activeMovieInfo?.vote_average.toFixed(1)}</span>
                            </div>
                            <p className='line pe-6 sm:w-[520px] '>{activeMovieInfo?.overview}</p>
                            <Link to={`/details/${activeMovieInfo?.id}`} className="flex w-fit items-center gap-3 bg-red-600 hover:bg-red-700 duration-300 mt-6 p-3 px-6 rounded-tl-2xl rounded-br-2xl ">
                                <span className="text-[24px] "><BiPlayCircle /></span>
                                Watch Now
                            </Link>
                        </div>
                    </div>
                    <div className="Base relative after:w-[100px] after:right-[0px] after:z-[2000] after:top-[-220px] after:h-[200px] after:absolute">
                        <div className="slider absolute bottom-5 right-0 flex sm:w-[600px] max-sm:px-4 z-[300] overflow-x-auto gap-3 ">
                            {popularMovies?.map((popMovie, index) => (
                                <NavLink
                                    key={index}
                                    className={`slider-item shrink-0 brightness-[.4] ${activeIndex === index ? 'brightness-[1] ' : 'brightness-[.4]'} `}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        wadawd()
                                        setTimeout(()=>{
                                            setActiveMovieInfo(popMovie);
                                        },200)
                                    }}
                                >
                                    <img loading="eager" className="w-[170px] h-[200px] rounded-[10px] object-cover " src={`https://image.tmdb.org/t/p/w500${popMovie.poster_path}`} alt="img" />
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <Slider useSt={upComingMovies} p={'Up Coming Movies'}/>
        <Slider useSt={trendingMovies} p={'Trending Movies'}/>
        <Slider useSt={topMovies} p={'Top Movies'}/>


        

        
        
        </>

    );
}

export default React.memo(Home);