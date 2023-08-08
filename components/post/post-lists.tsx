import React from 'react'
import { PostCard } from './post-card';
import { Post } from '@/types/colleciton';

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal"
}

export const PostLists = ({posts, layout = "vertical"}: PostListProps) => {
  return (
    <div className='grid grid-cols-2 gap-10'>{posts.map((post) => (
    <PostCard layout={layout} post={post} key={post.id} />
    
    ))}
    
     </div>
  )
}
