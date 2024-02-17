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

const Home = () => {
    const [popularMovies , setPopularMovies] = useState([]);
    const [activeIndex , setActiveIndex] = useState(0);
    const [activeMovieInfo, setActiveMovieInfo] = useState(null);

    async function getDataPopoluarMovies() {
        let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a979dad642f942e2f0d046021b704b36&page=1");
        let data = await res.json();
        setPopularMovies(data.results);
        setActiveMovieInfo(data.results[0]);
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
    }, [])



const [favouriteMovies , setFavouriteMovies] = useRecoilState(FavouriteMovies);


function likeOnClick(movieType, isliked) {
    console.log(movieType)
    // ///////////////
    let  newCart =  [...favouriteMovies , {
        ...movieType,
        isLiked: true
    }]


    for(let i = 0 ; i < favouriteMovies.length ; i++) {
        console.log(favouriteMovies[i].isLiked)
        if(favouriteMovies[i].id === movieType.id) {
            
                newCart = removeItemAtIndex(favouriteMovies , i )
            
            break;
        } 
    }



    // }
    // ////////////////
    setFavouriteMovies(newCart)
    localStorage.setItem("Favourite" , JSON.stringify(newCart) )
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


  const like = useRef()

//   const [addRemoveLike , setAddRemoveLike] = useState(favouriteMovies)

//   useEffect(()=>{
//       const initialFavouriteMovies = favouriteMovies.map(movie => ({
//           ...movie,
//           isLiked: true,
//           }));

          
//           setAddRemoveLike(favouriteMovies)
//           console.log(addRemoveLike)
        
//         },[favouriteMovies])
        
      

    return (
        <>
        <section className=" ">

                <div className='content relative  '>
                    <div ref={banner} className="duration-[.2s]">

                        <div className='imgbgaft after:bg-gradient-to-r from-[#01022de5]  to-transparent after:opacity-[.8] after:absolute after:inset-0'>
                            <div className="h-[100vh] w-full bg-cover bg-top " style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${activeMovieInfo?.backdrop_path})`}} ></div>
                        </div>
            <div className="container lg:px-20 ">
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
                        <div className="slider absolute bottom-5 right-6 flex sm:w-[600px] max-sm:px-4 z-[300] overflow-x-auto gap-3 ">
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
                                    <img loading="lazy" className="w-[170px] h-[200px] rounded-[10px] object-cover " src={`https://image.tmdb.org/t/p/w500${popMovie.poster_path}`} alt="img" />
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>






        <section>
            <div className="container p-6 2xl:w-[1350px] max-sm:w-[100%] ">

                <div className="Movies ">
                    <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Up Coming Movies</p>
                    <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {

                        upComingMovies?.map((upComingMovie , index) => {
                            const isLiked = favouriteMovies.find(m => m.id === upComingMovie.id)?.isLiked || false;
                            console.log(isLiked)
                            return (
                    <div className="toLoadMore relative overflow-hidden">

                        <Link key={index} id="boxs1" to={`/details/${upComingMovie?.id}`} className=" im1g  overflow-hidden relative">
                            <div className="img h-[320px] max-sm:h-[450px] w-full ">
                                <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${upComingMovie?.poster_path}`} alt="img" />
                                <div className="ovelayUpComingMovies absolute rounded-[9px] duration-300 inset-0 "></div>
                            </div>
                            <div className="Inf">
                                <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                    <BiPlay />
                                </div>
                                <div className="text-white">
                                    <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#a09f9f] w-fit ">{upComingMovie?.release_date.split("-")[0]}</p>
                                    <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                    <AiFillStar />
                                    {upComingMovie?.vote_average.toFixed(1)}
                                    </p>
                                    <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                        {upComingMovie?.title}
                                    </p>
                                    
                                </div>
                            </div>
                        </Link>
                        {/* Likeeeeeeeeeeeeeeeeee */}
                            <div ref={like} onClick={() =>{
                                    likeOnClick(upComingMovie)
                                }} className={`text-[30px] duration-300 ${isLiked ? 'Likee text-[red] ease-in' : 'text-white'} cursor-pointer absolute top-2 left-3 `}>
                                    <AiFillHeart />
                            </div>
                        </div>
                            // Likeeeeeeeeeeeeeeeeeeeee

                            )

                            
                        })

                    }
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container p-6 2xl:w-[1350px] max-sm:w-[100%] ">

                <div className="Movies ">
                    <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Top Movies</p>
                    <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {

                        topMovies?.map((topMovies , index) => {
                            const isLiked = favouriteMovies.find(m => m.id === topMovies.id)?.isLiked || false;
                            return (
                    <div className="toLoadMore relative overflow-hidden">

                        <Link key={index} id="boxs1" to={`/details/${topMovies?.id}`} className=" im1g  overflow-hidden relative">
                            <div className="img h-[320px] max-sm:h-[450px] w-full ">
                                <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${topMovies?.poster_path}`} alt="img" />
                                <div className="ovelayUpComingMovies absolute rounded-[9px] duration-300 inset-0 "></div>
                            </div>
                            <div className="Inf">
                                <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                    <BiPlay />
                                </div>
                                <div className="text-white">
                                    <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#a09f9f] w-fit ">{topMovies?.release_date.split("-")[0]}</p>
                                    <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                    <AiFillStar />
                                    {topMovies?.vote_average.toFixed(1)}
                                    </p>
                                    <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                        {topMovies?.title}
                                    </p>
                                    
                                </div>
                            </div>
                        </Link>
                        {/* Likeeeeeeeeeeeeeeeeee */}
                        <div ref={like} onClick={() =>{
                                likeOnClick(topMovies)
                            }} className={`text-[30px] ${isLiked ? 'text-[red]' : 'text-white'} cursor-pointer absolute top-2 left-3 `}>
                                <AiFillHeart />
                            </div>
                        </div>
                        // Likeeeeeeeeeeeeeeeeeeeee

                            )

                            
                        })

                    }
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container p-6 2xl:w-[1350px] max-sm:w-[100%] ">

                <div className="Movies ">
                    <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Trending Movies</p>
                    <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {

                        trendingMovies?.map((trendingMovies , index) => {
                            const isLiked = favouriteMovies.find(m => m.id === trendingMovies.id)?.isLiked || false;

                            return (
                    <div className="toLoadMore relative overflow-hidden">

                        <Link key={index} id="boxs1" to={`/details/${trendingMovies?.id}`} className=" im1g  overflow-hidden relative">
                            <div className="img h-[320px] max-sm:h-[450px] w-full ">
                                <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${trendingMovies?.poster_path}`} alt="img" />
                                <div className="ovelayUpComingMovies absolute rounded-[9px] duration-300 inset-0 "></div>
                            </div>
                            <div className="Inf">
                                <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                    <BiPlay />
                                </div>
                                <div className="text-white">
                                    <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#a09f9f] w-fit ">{trendingMovies?.release_date.split("-")[0]}</p>
                                    <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                    <AiFillStar />
                                    {trendingMovies?.vote_average.toFixed(1)}
                                    </p>
                                    <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                        {trendingMovies?.title}
                                    </p>
                                    
                                </div>
                            </div>
                        </Link>
                        {/* Likeeeeeeeeeeeeeeeeee */}
                        <div ref={like} onClick={() =>{
                                likeOnClick(trendingMovies)
                            }} className={`text-[30px] ${isLiked ? 'text-[red]' : 'text-white'} cursor-pointer absolute top-2 left-3 `}>
                                <AiFillHeart />
                            </div>
                        </div>
                        // Likeeeeeeeeeeeeeeeeeeeee

                            )

                            
                        })

                    }
                    </div>
                </div>
            </div>
        </section>
        
        </>

    );
}

export default React.memo(Home);