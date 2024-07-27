"use client"
import { setLike } from "@/app/api/posts/setLike"
import { Heart, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "./button";

interface LikeHandlerPageProps {
    setPost: React.Dispatch<React.SetStateAction<any | null>>;
    post: any;
}

export const LikeHandlerPage = ({ setPost, post }: LikeHandlerPageProps) => {
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleLike = async (id: string, type: boolean) => {
        setLoading(true);
        const response = await setLike(type, id, localStorage.getItem('username')!!);
        if (response.result === 'done') {
            setPost((prevPost:any) => 
                prevPost && prevPost.$id === id ? { ...prevPost, liked: type, likes: prevPost.likes + (type ? 1 : -1) } : prevPost
            )
        } else {
            console.error('Error updating likes:', response.result);
        }
        setLoading(false);
    };

    return (
        <div className='flex m-1 group-hover:pt-1.5 transition-all'>
            {
                loading ? (
                    <Button variant={'outline'} onClick={() => handleLike(post.$id, false)}>
                        <LoaderCircle className='animate-spin h-4 w-4' />
                    </Button>
                ) : (
                    <>
                        {
                            post.liked ? 
                                <Button variant={'outline'} onClick={() => handleLike(post.$id, false)}>
                                    <Heart className='my-auto cursor-pointer h-4 w-4 stroke-red-500 fill-red-500 dark:stroke-white dark:fill-white dark:hover:stroke-gray-400 dark:hover:fill-gray-400 hover:stroke-red-400 hover:fill-red-400 transition-all' />
                                    <span className='my-auto text-xs pl-1'>{post.likes}</span>
                                </Button> : 
                                <Button variant={'outline'} onClick={() => handleLike(post.$id, true)}>
                                    <Heart className='my-auto cursor-pointer h-4 w-4 dark:stroke-gray-400 dark:hover:stroke-red-500 hover:stroke-red-500 transition-all' />
                                    <span className='my-auto text-xs pl-1'>{post.likes}</span>
                                </Button>
                        }
                    </>
                )
            }
        </div>
    )
}
