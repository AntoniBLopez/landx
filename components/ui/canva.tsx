import { useEffect } from "react"
import CopyColorSpan from "./CopyColorSpan"
import CopyTextSpan from "./CopyTextSpan"
import { Image } from "lucide-react"

export const Canva = ({ post } : { post: any }) => {
    
    return(
        <div style={{backgroundColor: post.primary__color}} className={`h-44 group-hover:h-48 w-full transition-all object-cover rounded-md z-0 px-1 pt-1 group-hover:pt-1.5 opacity-90 group-hover:opacity-100 overflow-hidden`}>
            <h1 className='px-2' style={{fontFamily: post.font__style, filter: 'brightness(1)', backgroundImage: `linear-gradient(0deg, ${post.primary__color}, ${post.secondary__color})`, backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{post.name.split(' ')[0]}</h1>
            <h2 className='px-2' style={{filter: 'brightness(1)', backgroundImage: `linear-gradient(180deg, ${post.primary__color}, ${post.secondary__color})`, backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{post.page__style}</h2>
            <div className='w-max bg-black/20 rounded-md p-2 mt-2 ml-2 flex'>
                <Image className='bg-black/10 rounded-lg h-10 w-10 p-2' style={{filter: 'brightness(1.2)', stroke: post.secondary__color}}></Image>
                <div className='flex flex-col h-10 overflow-hidden'>
                    <span style={{filter: 'brightness(1.3)', color: post.secondary__color}} className='text-xs px-2'>Title</span>
                    <span style={{filter: 'brightness(1.3)', color: post.secondary__color, fontSize:'6px'}} className='px-3 w-56'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>
            <CopyColorSpan left={5} color={post.primary__color}></CopyColorSpan>
            <CopyColorSpan left={40.5} color={post.secondary__color}></CopyColorSpan>                                  
            <div className='absolute bottom-2 left-[77] m-2 bg-gray-500/15 hover:bg-gray-500/30 opacity-0 h-7 group-hover:opacity-100 transition-all'>
                <CopyTextSpan post={post}></CopyTextSpan>
            </div>
        </div>
    )
}