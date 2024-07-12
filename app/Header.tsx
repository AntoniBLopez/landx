import React from 'react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <header className='flex flex-row justify-between items-center'>
      <div>Header</div>
      {/* Switch theme button */}
      <div onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} className='py-2 px-3 bg-slate-400'>{resolvedTheme ? resolvedTheme : 'dark'}</div>
    </header>
  )
}