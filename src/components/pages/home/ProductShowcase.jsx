import { React, useState, useEffect } from 'react';
import ButtonBlack from '/src/components/shared/buttons/Button-Black.jsx';
import ButtonTransparent from '/src/components/shared/buttons/Button-Transparent.jsx';

function ProductMain() {
  return (
    <div className='bg-brightOrange bg-patternCircles bg-bottom bg-cover bg-no-repeat flex flex-col items-center rounded-lg text-center pb-[55px] md:pb-[64px] lg:grid lg:grid-cols-2 lg:text-left lg:pb-[124px] lg:pt-[133px] lg:gap-[138px] overflow-hidden'>
      <div className='relative z-0'>
        <img
          className='w-1/2 mt-[55px] mb-8 mx-auto md:hidden'
          src='public/assets/home/mobile/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
        <img
          className='w-1/3 mt-[55px] mb-8 mx-auto hidden md:block lg:hidden'
          src='public/assets/home/tablet/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
        <img
          className='absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-9/12 -mb-[280px] hidden lg:block'
          src='public/assets/home/desktop/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
      </div>
      <div>
        <h3 className='text-h3 md:text-h1 text-pureWhite uppercase mb-6'>
          ZX9<br></br> Speaker
        </h3>
        <p className='text-body text-pureWhite opacity-75 mb-6 max-w-[349px]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ButtonBlack>See product</ButtonBlack>
      </div>
    </div>
  );
}

function ProductSecondary() {
  return (
    <div className='bg-zx7-mobile bg-cover bg-no-repeat md:bg-zx7-tablet lg:bg-zx7-desktop rounded-lg'>
      <div className='ml-6 lg:ml-[96px] py-[101px]'>
        <h4
          className='text-h4 text-pureBlack
             uppercase mb-6'>
          ZX7 Speaker
        </h4>
        <ButtonTransparent>See Product</ButtonTransparent>
      </div>
    </div>
  );
}

function ProductAdditional() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:grid-auto-rows gap-[11px]'>
      <div className='rounded-lg overflow-hidden mb-6 h-full'>
        <img
          className='md:hidden'
          src='public/assets/home/mobile/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
        <img
          className='hidden md:block lg:hidden h-full w-full object-fit'
          src='public/assets/home/tablet/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
        <img
          className='hidden lg:block h-full w-full object-fit'
          src='public/assets/home/desktop/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
      </div>
      <div className='bg-paleSilver py-[41px] md:py-[101px] rounded-lg'>
        <div className='ml-6 lg:ml-[96px]'>
          <h4 className='text-h4 mb-6'>YX1 Earphones</h4>
          <ButtonTransparent>See Product</ButtonTransparent>
        </div>
      </div>
    </div>
  );
}

function ProductCategoryHome() {
  return (
    <section className='container mx-auto flex flex-col gap-6 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] '>
      <ProductMain></ProductMain>
      <ProductSecondary></ProductSecondary>
      <ProductAdditional></ProductAdditional>
    </section>
  );
}

export default ProductCategoryHome;