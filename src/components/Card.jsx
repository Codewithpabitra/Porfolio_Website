import React from 'react'
import { motion, scale } from "framer-motion"
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({data, reference}) => {
  return (
    <motion.div 
    drag
    dragConstraints={reference}
    whileDrag={{scale:1.1}}
    dragElastic={0.1}
    dragTransition={{ bounceStiffness: 100,  bounceDamping: 30 }}
    className='w-[200px] h-[200px] bg-zinc-900/90 p-5 box-border overflow-hidden flex flex-col gap-4 rounded-lg cursor-pointer'
     style={{ display: "block" }}
    >
      <h3 className="m-0 text-blue-300">{data.projectName}</h3>
      <p className=" text-gray-500 text-sm m-2">{data.projectDesc}</p>
        <a href={data.projecLink} target='_blank' className='flex items-center  gap-1 text-sm'>check here <IoIosArrowRoundForward/> </a>
      


    </motion.div>

  )
}

export default Card;