import Link from 'next/link'
import React from 'react'
import { PaddingContainer } from '../layout/padding-container'

export const Navgation = () => {
  return (

    <div className='border-b z-[999] sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md'>
        <PaddingContainer>
            <div className='py-6 flex items-center justify-between'>
                
            <Link className='text-lg font-bold gap-4 text-neutral-600' href="/">Explorer</Link>
            
            {/* Category Links */}
                <nav>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href="/cities">Cities</Link>
                        </li>
                        <li>
                            <Link href="/experiences">Experiences</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </PaddingContainer>
    </div>
  )
}
