"use client"
import { getPost } from '@/app/api/posts/getPost'
import Framer from '@/components/ui/Framer'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
    const { id } = useParams()
    const [postId, setPostId] = useState<string | undefined>(undefined)
    const [post, setPost] = useState<any>(null)

    useEffect(() => {
        if (id) {
            setPostId(id as string)
        }
    }, [id])

    useEffect(() => {
        async function fetchPost(postId: string) {
            try {
                let response = await getPost(postId)
                setPost(response.post)
            } catch (error) {
                console.error('Error fetching post:', error)
            }
        }

        if (postId) {
            fetchPost(postId)
        }
    }, [postId])

    if (!postId || !post) {
        return <p>Loading...</p>
    }

    return (
        <div className='mt-28'>
            <div className='flex-col mb-3 mx-auto w-max'>
                <h1 className='text-4xl text-center font-extrabold my-auto'>{post.name}</h1>
                <div className='flex mx-auto w-max'>
                    <h3 className='my-auto text-center m-2'>by </h3>
                    <img onClick={()=>{window.location.assign('/user/'+post.author)}} className='my-auto h-6 w-6 m-0.5 rounded-full cursor-pointer' src={post.pfp ?? '/unknown.png'}></img>
                    <h3 className='my-auto text-center m-1'><strong onClick={()=>{window.location.assign('/user/'+post.author)}} className='hover:underline cursor-pointer'>{post.author}</strong></h3>
                </div>
            </div>
            <Framer post={post}></Framer>
        </div>
    )
}
