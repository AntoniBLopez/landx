import Image from 'next/image'

export default function UserLandingCard() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-4'>
        <Image src={'/defaultProfilePicture.png'} width={40} height={40} alt='' />
        <Image src={'/landing-example.jpg'} width={0} height={0} alt='' className='w-20 h-auto object-cover' />
      </div>
      <div>
        <span>Rating: 4.5/5</span>
      </div>
    </div>
  )
}