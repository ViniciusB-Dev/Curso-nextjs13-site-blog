import { Post } from '@/types/colleciton'
import React from 'react'

interface PostContentProps {
    post: Post;
}

export const PostContent = ({post}: PostContentProps) => {
  return (
    <div>
        {/* Tags */}
        <div className='text-sm flex items-center gap-1'>
            <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-500' : 'text-indigo-500' }`}>{post.category.title}</div>
        </div>
    </div>
  )
}
