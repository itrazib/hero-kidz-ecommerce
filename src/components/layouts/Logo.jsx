import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"} className='flex gap-2 items-center'>
            <Image
             alt='hero-kidz-logo'
             src={"/assets/logo.png"}
             width={50}
             height={40}
            />
            <h1 className='text-xl font-bold'>Hero <span className='text-primary'>Kidz</span></h1>
            </Link>
        </div>
    );
};

export default Logo;