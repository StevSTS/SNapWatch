import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import FavouriteMovies from '../../Atom/Favourite/Favourite'
import { BiPlay } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'

const Favorites = () => {




    const watch = useRecoilValue(FavouriteMovies)


if(watch.length === 0 ) {
    return (
        <section className='pt-28'>
        <div className="container">
            <div className="Movies font-bold text-[35px] text-white ">
                    <p className='ms-3 text-red-600 tracking-wider '>There is No Result</p>
            </div>
        </div>
    </section>



    )
}



  return (
    <section className='pt-28 pb-14 '>
        <div className="container">
            




        <div className="Movies ">
                <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Your Favourite Movies</p>
                <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">

       
                {

                watch?.map((trendingMovies , index) => {
                        return (

                    <div className="relative overflow-hidden ">
                                
                    

                    <Link key={index} to={`/details/${trendingMovies?.id}`} className="im1g  relative ">
                        <div className="img">
                            <img className="h-[320px] w-[100%] object-cover rounded-lg  " src={`https://image.tmdb.org/t/p/original${trendingMovies?.poster_path}`} alt="img" />
                            <div className="ovelayUpComingMovies absolute duration-300 inset-0 "></div>
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
                                <p className="title duration-300 absolute bottom-[-90px] left-3
                                 w-[180px] h-[26px]  overflow-auto ">
                                    {trendingMovies?.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                    </div>

                        )

                        
                    })

                }


                     
                </div>
            </div>














        </div>
    </section>
  )
}

export default React.memo(Favorites)