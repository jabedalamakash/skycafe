"use client"
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmarks from './Bookmarks';

const Blogs = () => {


    const[blogData,setBlogData] =useState([]);
    const[loadings,setLoadings] = useState(true);
    const [totalTime,setTotalTime] =useState([]);
    const[marked,setMarked] =useState([]);
    const dataOfBlog =async ()=>{
        const request= await fetch ("/data.json");
        const response=await request.json();
        setBlogData(response);
        setLoadings(false);
        
    }
    useEffect(()=>{
        dataOfBlog();
    },[])

  

    const handleTime=(time)=>{
        // console.log(time);
        setTotalTime([...totalTime,time]);
    }

    const handleMark=(title)=>{
        // console.log(title);
        setMarked([...marked,title]);
        // const newMark=blogData.find((item)=>item.id===title.id);
        // if(newMark){
        //     alert('You Have Already Bookmarked This Blog!!!!')
        // }
        // else{
        //     setMarked([...marked,title]);

        // }
      
    }





    return (
        <>
            <section className='w-full sm:w-[80%] mx-auto px-5 sm:px-0'>

                <main className='flex flex-col-reverse sm:flex-row'>
                {loadings ? <h1 className='text-5xl font-bold text-center w-full sm:w-[70%] mx-auto'>Loading...</h1> :<article className='w-full sm:w-[70%] mx-auto'>
                {blogData && blogData.map((article)=>{
                    return <Blog key={article.id} handleMark={handleMark} handleTime={handleTime} data={article}/>
                })}

                </article>}

                <div className='w-full sm:w-[30%] sm:sticky sm:h-screen mb-10 sm:mb-0 sm:top-0 mx-auto'>
                    <Bookmarks marked={marked} totalTime={totalTime}/>


                </div>

                </main>




            </section>
        </>
    );
};

export default Blogs;