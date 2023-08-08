import Image from 'next/image'
import React from 'react'

export const CtaCard = () => {
  return (
    <div className='rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden '>
        {/* Overlay */}
        <div className='obsolute z-10 inset-0 bg-gradoemt-to-br from-white/95 via-white/70 to-white/30'></div>
        {/* Image */}
        <Image className='object-cover object-center opacity-85' alt='CTA CARD Image' fill src="https://images.unsplash.com/photo-1644922749062-df360a174255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
        {/* Conent Container */}
        <div className='relative z-20 text-gray-50 ' >
            <div className='font-medium text-lg'>#exploretheworld</div>
            <h3 className='mt-3 text-4xl font-semibold'>Explore the world with me!</h3>
            <p className='mt-2 text-lg max-w-lg'>
                Explore the world withe me! I'm travelling around the. I've visited most of the grat cities of and currently I'm trabelling in Join me!
            </p>
                  {/* From */}
            <form  className="flex items-center gap-2 mt-6" action="">
                <input className='bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm' type="text" name="" id="" placeholder='Write your email.'/>
                <button className='px-3 py-2 bg-neutral-900 rounded-md bg-neural-900 text-neutral-200' >Sign Up</button>
            </form>
        </div>
  
    </div>
    )
}
