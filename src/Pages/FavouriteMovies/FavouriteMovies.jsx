import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import FavouriteMovies from '../../Atom/Favourite/Favourite'
import { BiPlay } from 'react-icons/bi'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'

const Favorites = () => {


    const [favouriteMovies , setFavouriteMovies] = useRecoilState(FavouriteMovies);
    function likeOnClick(movieType, isliked) {
        let  newCart =  [{
            ...movieType,
            isLiked: true
        } , ...favouriteMovies]
    
        for(let i = 0 ; i < favouriteMovies.length ; i++) {
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



    const watch = useRecoilValue(FavouriteMovies)


if(watch.length === 0 ) {
    return (
        <section className='pt-28'>
        <div className="container">
            <div className="Movies font-bold text-[35px] text-white ">
                <p className='ms-10 text-blue-600 tracking-wider '>There is No Result</p>
            </div>
        </div>
    </section>
    )
}


  return (
    <section className='mb-10 '>
        <div className="container md:px-[58px]">

        <p className="mb-8 mt-28 font-bold text-[35px] text-white ">Your Favourite Movies</p>
            <div className='Movies flex gap-6 w-full flex-wrap'>
                {
                    watch?.map((trendingMovies, index) => {
                        const isLiked = favouriteMovies.find(m => m.id === trendingMovies.id)?.isLiked || false;
                        return (
                            <div key={index} className='relative max-sm:w-full'>
                                <Link id="boxs1" to={`/details/${trendingMovies?.id}`} className="im1g">
                                    <div className='overflow-hidden relative'>
                                            <div className='colorDiv duration-[1.5s] backdrop-blur-[2px] absolute z-[200] w-[1200px] h-[20px] rotate-[-45deg] top-0 left-[-660px] '></div>
                                        <div className="img w-[335px] h-[450px] max-xl:w-[280px] max-xl:h-[400px] max-lg:w-[314px] max-lg:h-[380px] max-md:w-[284px] max-md:h-[380px] max-sm:w-full max-sm:h-[380px] relative ">
                                            <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${trendingMovies?.poster_path}`} alt="img" />
                                            <div className="ovelayUpComingMovies absolute rounded-[9px] opacity-0 duration-300 inset-0 "></div>
                                        </div>
                                        <div className="Inf">
                                            <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                            <BiPlay />
                                            </div>
                                            <div className="text-white">
                                                <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#75757585] w-fit ">{trendingMovies?.release_date.split("-")[0]}</p>
                                                <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                                    <div className='relative text-[40px] '>
                                                        <AiFillStar />
                                                        <p className='absolute text-[11px] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-black'>{trendingMovies?.vote_average.toFixed(1)}</p>
                                                    </div>
                                                </p>
                                                <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                                    {trendingMovies?.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div onClick={() =>{ likeOnClick(trendingMovies) }} className={`text-[30px] duration-300 ${isLiked ? 'Likee text-[red] ease-in' : 'text-white'} cursor-pointer absolute top-2 left-3 `}>
                                    <AiFillHeart />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>














    // <section className='pt-28 pb-14 '>
    //     <div className="container">
    //     <div className="Movies ">
    //             <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Your Favourite Movies</p>
    //             <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
    //             {

    //             watch?.map((trendingMovies , index) => {
    //                     return (

    //                 <div className="relative overflow-hidden ">        

    //                 <Link key={index} to={`/details/${trendingMovies?.id}`} className="im1g  relative ">
    //                     <div className="img">
    //                         <img className="h-[320px] w-[100%] object-cover rounded-lg  " src={`https://image.tmdb.org/t/p/original${trendingMovies?.poster_path}`} alt="img" />
    //                         <div className="ovelayUpComingMovies absolute duration-300 inset-0 "></div>
    //                     </div>
    //                     <div className="Inf">
    //                         <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
    //                             <BiPlay />
    //                         </div>
    //                         <div className="text-white">
    //                             <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#a09f9f] w-fit ">{trendingMovies?.release_date.split("-")[0]}</p>
    //                             <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
    //                             <AiFillStar />
    //                             {trendingMovies?.vote_average.toFixed(1)}
    //                             </p>
    //                             <p className="title duration-300 absolute bottom-[-90px] left-3
    //                              w-[180px] h-[26px]  overflow-auto ">
    //                                 {trendingMovies?.title}
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </Link>
    //                 </div>

    //                     )

                        
    //                 })

    //             }
                     
    //             </div>
    //         </div>

    //     </div>
    // </section>













  )
}

export default React.memo(Favorites)