import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/nav'
import { Link, useParams } from 'react-router-dom'
import { BiPlay } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { motion } from "framer-motion";

const Category = () => {

    const params = useParams()
console.log(params)
    const [ categoryMov , setCategoryMov ] = useState()

    async function categoryMovies() {
        let data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a979dad642f942e2f0d046021b704b36&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${params.movieId}`)
        let res = await data.json()
        setCategoryMov(res.results)
    }
    useEffect(() => {
        categoryMovies()
    }, [params])
    
    
    
  return (
      <>

<section className='mt-12'>
            <div className="container p-6 2xl:w-[1350px] max-sm:w-[100%] ">

                <div className="Movies ">
                    <p className="mb-8 mt-5 font-bold text-[35px] text-white ">Up Coming Movies</p>
                    <div className="grid 2xl:grid-cols-5 max-2xl:grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                    {
                        categoryMov?.map((categoryMov , index) => {
                            return (
                    <div className="toLoadMore relative overflow-hidden">

                        <Link key={index} id="boxs1" to={`/details/${categoryMov?.id}`} className=" im1g  overflow-hidden relative">
                            <div className="img h-[320px] max-sm:h-[450px] w-full ">
                                <img loading='lazy' className="h-full w-full rounded-[10px] object-cover" src={`https://image.tmdb.org/t/p/original${categoryMov?.poster_path}`} alt="" />
                                <div className="ovelayUpComingMovies absolute rounded-[9px] duration-300 inset-0 "></div>
                            </div>
                            <div className="Inf">
                                <div className="Icons bg-red-400 rounded-full duration-500 absolute top-[-20%] text-[0] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
                                    <BiPlay />
                                </div>
                                <div className="text-white">
                                    <p className="year duration-300 absolute px-3 right-[-120px] top-5 font-[800] bg-[#a09f9f] w-fit ">{categoryMov?.release_date.split("-")[0]}</p>
                                    <p className="rate duration-300 absolute top-[70px]  left-[-50px] flex items-center gap-2 text-[#ffff37]">
                                    <AiFillStar />
                                    {categoryMov?.vote_average.toFixed(1)}
                                    </p>
                                    <p className="title duration-300 absolute bottom-[-90px] left-3 w-[180px] h-[26px]  overflow-auto ">
                                        {categoryMov?.title}
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

    </>
  )
}

export default Category