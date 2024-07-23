import Image from 'next/image'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function UserLandingCard({ ratingAmount }: { ratingAmount: number }) {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  useEffect(() => {
    console.log('rating', rating)
  }, [rating])

  return (
    <div className='flex flex-row gap-4 p-4 rounded-xl bg-[#180b24]'>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <Image src={'/defaultProfilePicture.png'} width={40} height={40} alt='' className='self-start' />
            <span className='text-sm self-start'>@John_Doe</span>
          </div>
          <Link href={'/dashboard'/* Previsualizar Landing Page con el SDK de StackBlitz */} className='text-sm font-bold py-2 px-4  text-black bg-purple-500 hover:text-purple-500 hover:bg-transparent'>
            See LandX
          </Link>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row self-center items-center mb-2 gap-1'>
          <div className='flex flex-row'>
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1

              return (
                <label key={index} className='flex flex-row'>
                  <input
                    type='radio'
                    name='rating'
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className='relative left-4 hidden'
                  />
                  <Star
                    key={index}
                    size={20}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(0)}
                    className={`star cursor-pointer ${currentRating <= (hover || rating) ? 'fill-yellow-500 stroke-yellow-500' : 'fill-none stroke-black dark:stroke-white'}`}
                  />
                </label>
              )
            })}
          </div>
          <span className='text-sm'>({ratingAmount})</span>
        </div>
        <Image src={'/landing-example.jpg'} width={180} height={90} alt='' className='object-cover rounded-xl' />
      </div>
    </div>
  )
}