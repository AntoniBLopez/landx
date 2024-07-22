'use client'
import UserLandingCard from '@/app/(main)/dashboard/widgets/UserLandingCard'

export default function Page() {
  return (
    <main className='mt-28 mx-8'>
      <h1 className='text-center py-10'>See all landing pages created by Landex users!</h1>

      <div className='flex flex-col w-full items-center gap-2'>
        <UserLandingCard />
        <UserLandingCard />
        <UserLandingCard />
        <UserLandingCard />
      </div>
    </main>

  )
}