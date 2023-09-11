import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <section className='w-full sm:w-[80%] mx-auto px-5 sm:px-0 bg-white mb-20'>
            <nav className='flex py-10  justify-between '>
            <h2 className='text-5xl font-bold text-[#6F4E37]'><span className='text-blue-600'>Sky</span> Cafe</h2>
            <Image
            src={"/images/akash.jpg"}
            height={20}
            width={20}
            alt="profile"
            className='w-16 h-16 border-2  border-blue-600  rounded-full'/>

            </nav>
            
            
        </section>
    );
};

export default Header;