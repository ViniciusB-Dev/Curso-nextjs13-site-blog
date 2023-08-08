import { Post } from '@/types/colleciton'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PostContent } from './post-content';

interface PostProps {
    post: Post;
}
export const PostCard = ({ post }: PostProps) => {
  return (
    <Link className='grid grid-cols-2 gap-10' href={`/post/${post.slug}`}>
        {/* Post Image */}
        <Image alt={`${post.title}`} src={`${post.image}`} width={600} height={300} />
        {/* Post Content */}
        <div>
            <PostContent post={post}/>
        </div>
    </Link>
  )
}
