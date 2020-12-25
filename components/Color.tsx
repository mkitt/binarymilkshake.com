import { memo } from 'react'

type PropsType = {
  subject: string
}

function Color(props: PropsType) {
  const { subject } = props
  return (
    <span
      className="flex w-full h-full p-2 text-xs"
      style={{ backgroundColor: subject }}
    >
      {subject}
    </span>
  )
}

export default memo(Color)
