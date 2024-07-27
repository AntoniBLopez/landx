"use client"
import { setLike } from "@/app/api/posts/setLike"
import { Heart, LoaderCircle } from "lucide-react"
import { useState } from "react"

interface LikeHandlerUserProps {
    setPosts: (posts: any) => void;
    post: any;
    liked: boolean;
}

export const LikeHandlerUser: React.FC<LikeHandlerUserProps> = ({ setPosts, post, liked }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleLike = async (id: string, type: boolean) => {
        setLoading(true);
        try {
            const response = await setLike(type, id, localStorage.getItem('username')!!);
            console.log('Response from setLike:', response); // Log the response

            if (response.result === 'done') {
                setPosts((prevPosts: any) => 
                    prevPosts.map((p: any) => 
                        p.$id === id ? { ...p, liked: type, likes: p.likes + (type ? 1 : -1) } : p
                    )
                );
            } else {
                console.error('Error updating likes:', response.result);
            }
        } catch (error) {
            console.error('Error in handleLike:', error);
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
                            liked ? 
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
