'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { increment, decrement } from '@/store/counterSlice'

export default function CounterClient() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
    </div>
  )
}
