import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <div className='flex-1 space-y-5'>
                <h1 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার শিশুকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যত</span> </h1>
                <p>Buy Every Toy With Upto 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image alt='Buy every toy with upto 15% discount' src={"/assets/hero.png"} width={500} height={500}/>
            </div>
        </div>
    );
};

export default Banner;