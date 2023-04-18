import React, { useContext, useEffect, useState } from 'react'
import shadow from "../assets/imags/shadow.png"

import cactuses from "../assets/cactusImages/import"
import pots from "../assets/potsImages/import"
import { ControlersContext } from '../Context/ControlersContext'
import { useMediaQuery } from 'react-responsive'

function PlantViewr() {
    const { pot , setPot , cactus , setCactus }= useContext(ControlersContext);
   const [animation , setAnimation ]=useState(true);
   const [animationC , setAnimationC ]=useState(true);
   const [currentCactus,setCurrentCactus]=useState(0);
   const [currentPot,setCurrentPot]=useState(0);
   const [leftRight ,setLeftRight ]=useState(false)
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1050px)'})
   useEffect(()=>{
        setAnimation(true);
        const a =()=>{
            setAnimation(false)
            setCurrentPot(pots[pot])
            setLeftRight(p=>!p)
        }
        setTimeout(a, 200);
        return ()=>{clearTimeout(a);}
   },[pot])
   useEffect(()=>{
        setAnimation(true);
        const a =()=>{
            setAnimation(false)
            setCurrentCactus(cactuses[cactus])
            setLeftRight(p=>!p)
        }
        setTimeout(a, 200);
        return ()=>{clearTimeout(a);}
   },[cactus])

    const handleRandom = ()=>{
        if(isDesktopOrLaptop){

        let a=Math.floor(Math.random()*(pots.length))
        let b=Math.floor(Math.random()*(cactuses.length))
        if(pot==a||cactus==b){
            handleRandom()
        }else{
            setPot(a)
            setCactus(b)
        }
        }
    }

  return (
    <div className='flex-1 h-full flex justify-center items-center pt-16 md:pt-20 '>
        <div onClick={isDesktopOrLaptop && handleRandom} className={(animation?" opacity-100 ":" opacity-100 ")+' md:cursor-auto cursor-pointer  duration-50 relative w-[400px] flex flex-row justify-center items-center '}>
            <img draggable={false} className='w-[180px] md:w-[250px]  absolute top-[150px] md:top-[230px] opacity-60 z-[0]' src={shadow}></img>
            <img draggable={false}  className={'h-[200px] md:h-[300px] absolute duration-150 ease-in '+(animation?" scale-95 translate-y-2 ":" scale-100 ")} src={currentPot}></img>
            <img draggable={false} className='h-[200px] md:h-[300px] opacity-0' src={currentPot}></img>
                                                                                             {/* animationC?" opacity-100 ":" opacity-0 " */}
            <div className={(animation?" -translate-y-2 opacity-10 scale-50 ":" scale-100 ")+'  rounded-[140px] ease-in duration-150 w-[180px] md:w-[300px] absolute top-[-95px] md:top-[-162px] overflow-hidden '}>
            <img draggable={false} className={'duration-150 ease-in '+(animation?" translate-y-52 ":" scale-100 ")+(animation?" scale-90 translate-y-5 ":" scale-100 ")} src={currentCactus}></img>
            </div>
        </div>
    </div>
  )
}

export default PlantViewr