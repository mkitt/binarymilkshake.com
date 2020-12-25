import { memo } from 'react'
import unsplash from '../lib/unsplash'

type PropsType = {
  subject: string
}

function Animal(props: PropsType) {
  const { subject } = props
  return (
    <img
      alt={`unsplash/${subject}`}
      className="object-cover w-full h-full text-xs"
      src={unsplash.daily(subject)}
    />
  )
}

export default memo(Animal)
