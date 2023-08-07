import { memo } from 'react'

type PropsType = {
  subject: string
}

function Color(props: PropsType) {
  const { subject } = props
  return (
    <span
      className="flex h-full w-full p-2 text-xs"
      style={{ backgroundColor: subject }}
    >
      {subject}
    </span>
  )
}

export default memo(Color)
