import React from 'react'
import { PaddingContainer } from '../layout/padding-container'
import { siteConfig } from '@/Config/site'
import Link from 'next/link'
import { SocialLink } from '../elements/social-link'

export const Footer = () => {
  return (
    <div className='py-8 border-t mt-10'>
        <PaddingContainer>
            <div>
                <h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
                <p className='max-w-md mt-2 text-neutral-700 text-lg'>
                    {siteConfig.description}
                </p>
            </div>
            {/* Social and Currently At  */}
                <div className='mt-6 flex flex-wrap justify-between gap-4'>
                    <div>
                        <div className='font-medium text-lg'>#exploretheworld</div>
                        <div className='flex items-center gap-3 text-neutral-600 mt-2'>
                            <SocialLink platform="twitter" link={ siteConfig.socialLinks.twitter} />
                            <SocialLink platform="instagram" link={ siteConfig.socialLinks.twitter} />
                            <SocialLink platform="github" link={ siteConfig.socialLinks.twitter} />
                            <SocialLink platform="youtube" link={ siteConfig.socialLinks.twitter} />
                            <SocialLink platform="facebook" link={ siteConfig.socialLinks.twitter} />
                            <SocialLink platform="linkdin" link={ siteConfig.socialLinks.twitter} />
                            
                        </div>
                    </div>
                    <div>
                        <div className='text-sm text-neutral-400'>Currently At</div>
                        <div className='bg-white shadow-md px-3 py-2 rounded-md flex items-center gap-2'>
                            <div className='bg-emerald-400 rounded-full w-2 h-2'/>
                            {siteConfig.currentlyAt}</div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className='flex flex-wrap items-center gap-4 border-t py-3 justify-between mt-16'>
                    <div className='text-sm text-neutral-400'>All right are reserved | Copyright {new Date().getFullYear()}</div>
                        <div className='text-sm'>
                            Made withg love by  <Link className='underline underline-offset-4' href="https://test">@teste</Link>
                        </div>
                </div>
        </PaddingContainer>
    </div>
  )
}
