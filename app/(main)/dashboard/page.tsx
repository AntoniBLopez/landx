'use client'
import { getPosts } from '@/app/api/posts/getPosts'
import { BackgroundBeams } from '@/components/ui/background-beams'
import UserLandingCard from '@/components/ui/postcard'

export default async function Page() {

  const posts = await getPosts()

  return (
    <main className='mt-28 mx-8'>
      <h1 className="text-center outlinedLabel text-transparent shadow-white">Dashboard.</h1>
      <h2 style={{letterSpacing:'2px'}} className='text-center text-2xl font-light py-5'>Explore our users art.</h2>

      {
          posts.info ? (
            <>
              {
                posts.info.length > 1 ? (
                  <div className='flex flex-col w-full items-center gap-2'>
                    {
                      posts.info.map((post) => 
                        <div>
                          <h1>{post.author}</h1>
                        </div>
                      )
                    }
                  </div>
                ) : (
                  <h3 className='text-center'>No landing pages were found...</h3>
                )
              }
            </>
          ) : (
            <>
              <h3 className='text-center'>Error while loading...</h3>
            </>
          )
      }
      
      <BackgroundBeams></BackgroundBeams>
    </main>

  )
}