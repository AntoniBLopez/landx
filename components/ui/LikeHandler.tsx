"use client"
import { setLike } from "@/app/api/posts/setLike"
import { Heart, LoaderCircle } from "lucide-react"
import { useState } from "react"

export const LikeHandler = ({ setPosts, post } : { setPosts:any, post: any }) => {

    const [loading, setLoading] = useState<boolean>(false)

    const handleLike = async (id: string, type: boolean) => {
        setLoading(true);
        const response = await setLike(type, id, localStorage.getItem('username')!!);
        if (response.result === 'done') {
            setPosts((prevPosts: any) => 
                prevPosts.map((post: any) => 
                    post.$id === id ? { ...post, liked: type, likes: post.likes + (type ? 1 : -1) } : post
                )
            );
        } else {
            console.error('Error updating likes:', response.result);
        }
        setLoading(false);
    };

    return (
        <div className='flex w-fit m-0 p-0.5 ml-1 group-hover:pt-1.5 transition-all'>
            {
                loading ? (<LoaderCircle className='animate-spin h-4 w-4' />) :
                ( 
                    <>
                        {
                            post.liked ? 
                            <Heart onClick={()=>{handleLike(post.$id, false)}} className='my-auto cursor-pointer h-4 w-4 stroke-red-500 fill-red-500 dark:stroke-white dark:fill-white dark:hover:stroke-gray-400 dark:hover:fill-gray-400 hover:stroke-red-400 hover:fill-red-400 transition-all'></Heart> :
                            <Heart onClick={()=>{handleLike(post.$id, true)}} className='my-auto cursor-pointer h-4 w-4 dark:stroke-gray-400 dark:hover:stroke-red-500 hover:stroke-red-500 transition-all'></Heart>
                        }
                        <span className='my-auto text-xs pl-1'>{post.likes}</span>
                    </>
                )
            }
        </div>
    )
}