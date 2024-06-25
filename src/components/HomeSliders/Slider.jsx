import React from 'react'
import { useRecoilState } from 'recoil';
import FavouriteMovies from '../../Atom/Favourite/Favourite';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';

const Slider = ({useSt,p}) => {



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





  return (
    <section className='mb-10'>
        <div className="container px-[58px]">
            <p className="my-8 font-bold text-[35px] text-white ">{p}</p>
            <div className='Movies flex gap-6 w-full overflow-x-auto scroll-smooth '>
                {
                    useSt?.map((upComingMovie, index) => {
                        const isLiked = favouriteMovies.find(m => m.id === upComingMovie.id)?.isLiked || false;
                        return (
                            <div key={index} className='movi relative'>
                                <Link id="boxs1" to={`/details/${upComingMovie?.id}`} className="im1g">
                                    <div className='overflow-hidden relative'>
                                            <div className='colorDiv duration-[1.5s] backdrop-blur-[2px] absolute z-[200] w-[1200px] h-[20px] rotate-[-45deg] top-0 left-[-660px] '></div>
                                        <div className="img w-[350px] h-[450px] relative ">
                                            <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${upComingMovie?.poster_path}`} alt="img" />
                                            <div className="ovelayUpComingMovies absolute rounded-[9px] opacity-0 duration-300 inset-0 "></div>
                                        </div>
                                        <div className="Inf">
                                            <div className="Icons bg-blue-700 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                            <BiPlay />
                                            </div>
                                            <div className="text-white">
                                                <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#75757585] w-fit ">{upComingMovie?.release_date.split("-")[0]}</p>
                                                <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                                    <div className='relative text-[40px] '>
                                                        <AiFillStar />
                                                        <p className='absolute text-[11px] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-black'>{upComingMovie?.vote_average.toFixed(1)}</p>
                                                    </div>
                                                </p>
                                                <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                                    {upComingMovie?.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div data-liked={isLiked} onClick={() =>{ likeOnClick(upComingMovie) }} className={`likehove text-[32px] duration-300 ${isLiked ? 'Likee text-[red] ease-in opacity-[1]' : 'text-white'} cursor-pointer absolute top-2 left-3 `}>
                                    <AiFillHeart />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default React.memo(Slider)