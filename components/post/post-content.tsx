import { getReadingTime, getRelativeDate } from '@/lib/helpers';
import { Post } from '@/types/colleciton'
import { ArrowRight } from "lucide-react";
import React from 'react'

interface PostContentProps {
    post: Post;
}

export const PostContent = ({post}: PostContentProps) => {
  return (
    <div className='space-y-2'>
        {/* Tags */}
        <div className='text-sm flex items-center gap-2 text-neutral-400' >
            <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-500' : 'text-indigo-500' }`}>{post.category.title}</div>

           
                <div className='w-2 h-2 rounded-full bg-neutral-200'/>
                <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
                <div className='w-2 h-2 rounded-full bg-neutral-200'/>
                  <div>{ getReadingTime(` ${post.body} `) }</div>
                <div className='w-2 h-2 rounded-full bg-neutral-200'/>
                <div>{getRelativeDate( `${post.date_created}` ) }</div>
        </div>
               
                  {/* Title */}
                  <h2 className='text-3xl font-medium'>{post.title}</h2>
                  {/* Description  */}
                  <p className='leading-snug text-neutral-600'>{post.description}</p>

                  <div className='flex items-center gap-2 pt-3'>Read More <ArrowRight size={14}/> </div>
        
     
    </div>
     
  )
}
