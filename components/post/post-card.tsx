import { Post } from '@/types/colleciton'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PostContent } from './post-content';

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean;
}
export const PostCard = ({ post, layout = "horizontal", reverse = false }: PostProps) => {
  return (
    <Link className={`${layout === 'horizontal' ? " grid grid-cols-2 gap-10 items-center" : "space-x-10" }`} href={`/post/${post.slug}`}>
        {/* Post Image */}
        <Image className={`rounded-md w-full object-cover object-center max-h-[300px] ${reverse ? "order-last" : ""}`} alt={`${post.title}`} src={`${post.image}`} width={600} height={300} />
        {/* Post Content */}
        <div>
            <PostContent post={post}/>
        </div>
    </Link>
  )
}
