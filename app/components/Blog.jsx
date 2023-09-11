
import Image from 'next/image';
import React, { useState } from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';



const Blog = ({data,handleTime,handleMark}) => {
 const{id,image,name,title,time,userimg,date} = data;
    return (
        <>
        <section>
        <main className='mb-10 sm:mr-10'>

         
            <Image
            src={image}
            width={845}
            height={450}
            alt={name}

            className='mb-5 rounded-xl'/>


            <div className='flex justify-between mb-4'>
            <div className='flex'>
            <Image
            src={userimg}
            width={50}
            height={50}
            alt={name}   
            className='mb-5 w-12 h-12 object-center rounded-full'/>



                <div className='ml-6'>
                <p className='font-bold text-xl'>{name}</p>
                <p className=''>{date}</p>
                </div>
                </div>

                <div className='px-3 flex items-center gap-4'>
                <p className=''>{time} min to read </p>
                <button  className='text-center' onClick={()=>handleMark(data)}> <BsBookmarkCheck  color={"#6047EC"} size={20}/></button>
                
                </div>
               
            
            </div>





          
            <h3 className='text-4xl font-bold mb-5'>{title}</h3>
            <p className='mb-5'>#biginers #programming</p>
            <button onClick={()=>handleTime(time)} className='underline text-[#6047EC] text-2xl font-bold'>Mark as read</button>

        </main>



        </section>
            
        </>
    );
};

export default Blog;