'use client'
import UserLandingCard from '@/app/(main)/dashboard/widgets/UserLandingCard'

export default function Page() {
  return (
    <main className='mt-28 mb-20 mx-8'>
      <h1 className='text-center py-10'>See all landing pages created by Landex users!</h1>

      <div className='flex flex-wrap w-full items-center justify-center gap-10'>
        <UserLandingCard ratingAmount={24} />
        <UserLandingCard ratingAmount={8} />
        <UserLandingCard ratingAmount={4} />
        <UserLandingCard ratingAmount={10} />
        <UserLandingCard ratingAmount={45} />
        <UserLandingCard ratingAmount={19} />
      </div>
    </main>

  )
}