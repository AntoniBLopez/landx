import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/stateSlice'
import { RootState } from '@/store'

export default function Header() {
  const dispatch = useAppDispatch()
  const actualTheme = useAppSelector((state: RootState) => state.store.theme)

  return (
    <header className='flex flex-row justify-between items-center'>
      <div>Header</div>
      {/* Switch theme button */}
      <div onClick={() => dispatch(setTheme(actualTheme === 'light' ? 'dark' : 'light'))} className='py-2 px-3 bg-slate-400'>{actualTheme ? actualTheme : 'dark'}</div>
    </header>
  )
}