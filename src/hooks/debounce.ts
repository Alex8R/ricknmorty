import { useEffect, useState } from 'react'

type Debounce = {
  (value: string, delay?: number): string
}
export const useDebounce: Debounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue;
}
