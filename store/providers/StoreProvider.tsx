'use client'
import { useRef } from "react";
import { Provider } from 'react-redux'
import { AppStore, store } from "@/store"

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  storeRef.current = store()

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}