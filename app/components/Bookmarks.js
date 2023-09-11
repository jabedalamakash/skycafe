import React from 'react';

const Bookmarks = ({totalTime,marked}) => {
  //  console.log(marked);
  const readTime =totalTime.reduce((acc, item) => acc + item,0)
    return (
        <div>
          <h2 className='text-3xl text-center p-5 rounded-xl mb-10 font-bold bg-[#EFEDFD] border-2 border-[#6047EC] text-[#6047EC]'>Spend time on read:{readTime} </h2>
          <div className='bg-[#F3F3F3] p-5 sm:p-10 rounded-xl'>
          <h2 className='text-3xl font-bold mb-10 text-center '>Bookmarked Blog:{marked.length} </h2>
          {marked.map((list)=>{
          return <p key={list.id} className='bg-white rounded-xl text-xl p-5 mb-7'>{list.title}</p>
          })}
          
          </div>
          

            
        </div>
    );
};

export default Bookmarks;