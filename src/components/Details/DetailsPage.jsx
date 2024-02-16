import { AiFillStar } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/nav'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {

    const params = useParams()

    const [detailsPage , setDetailsPage] = useState()

    async function getDataDetailsPage() {
      let res = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=a979dad642f942e2f0d046021b704b36&append_to_response=casts,videos,images,releases`);
      let data = await res.json();
      setDetailsPage(data);
    }
    console.log(detailsPage)

  useEffect(() => {
    getDataDetailsPage();
  }, [params]);

 
  let genersArr = []
  let castsArr = []
  


  let baseImg = "https://image.tmdb.org/t/p/"

  return (
    // <>
    //     <section className='p-10 relative w-[calc(100vw-250px)] z-[900000] h-auto overflow-hidden '>
    //     <div className="container">
    
    
    //     </div>
    
    //     </section>
    // </>
    
    
    
    
    
    <>
      <section className="Details pt-20 relative ">
         <div className='backdrop absolute blur-[2px] bg-no-repeat after:absolute after:inset-0 after:bg-[#373434] after:opacity-[.4] inset-0 opacity-[.3] z-[-1] bg-cover' style={{backgroundImage: `url('${baseImg}${"original"}${detailsPage?.backdrop_path || detailsPage?.poster_path}')`, height: "100%", width: "100%"}} ></div>
        <div className="container p-6 ">



        <div className='Movie lg:flex gap-10 items-start '>
    <img loading='lazy' className='rounded-[15px] w-[342px] h-[513px] max-lg:w-full max-lg:h-[320px] object-cover ' src={`${baseImg}original${detailsPage?.poster_path}`} alt="" />

<div className='Info text-white mt-6 w-full ' >
  <h2 className='text-[35px] font-bold mb-5 '>{detailsPage?.title}</h2>
  <div className='flex gap-8 mt-3 '>
    <p className="flex items-center gap-2 text-[#ffff37]">
        <AiFillStar />
      {detailsPage?.vote_average.toFixed(1)}
      </p>
    <p className='relative after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#717070] after:top-[50%] after:translate-y-[-50%] after:left-[-20px] ' >{detailsPage?.runtime}M</p>
    <p className='relative after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#717070] after:top-[50%] after:translate-y-[-50%] after:left-[-20px] ' >{detailsPage?.release_date}</p>
  </div>
  <p className='mt-3 mb-5 text-[#a9a1a1]'>
  {
    detailsPage?.genres.map((name) => {

      genersArr.push(name.name)
      return  genersArr.join(", ")

    })
    }
    </p>

    <p className=' tracking-wider'>{detailsPage?.overview}</p>
    <div className='flex items-start gap-10 mt-6'>
      <p className='pt-[12px] text-[17px]  text-[#9f9b9b] '>Starring</p>
      <p className='paragraph my-3 leading-[27px] '>
      {
        detailsPage?.casts.cast.map((name) => {

          castsArr.push(name.name)
          return  castsArr.join(", ")

        })
        }
        </p>
    </div>
    <div className="flex items-center gap-5 mt-6">
      <p className="text-[17px]  text-[#9f9b9b] ">Directed By</p>
      <p>{detailsPage?.casts.crew[0].name}</p>
    </div>

    <div className="Trailers mt-12 w-[900px] max-2xl:w-[650px] max-xl:w-[500px] max-lg:w-[100%] ">

        <span className="text-[25px] mb-5 block">Trailers & Clips</span>
        <div className="flex overflow-x-auto gap-5">
        {
          detailsPage?.videos.results.map((name , index) => {
            return (
            <iframe className="rounded-xl iframe-container " style={{width: "500px !important", height: "260px"}} key={index} src={`https://www.youtube.com/embed/${name?.key}?&theme=dark&color=white&rel=0`} title={`${name?.name}`} frameborder="0" allowFullScreen="1" loading="lazy"></iframe>
            )
          })
        }


        </div>
    </div>

</div>

</div>








        </div>
      </section>
    </>


  )
}

export default DetailsPage