type PropsType = React.HTMLAttributes<HTMLButtonElement> & {
  readonly direction: 'north' | 'south' | 'east' | 'west'
}

export default function Paddle(props: PropsType) {
  const { direction, ...rest } = props
  return (
    <button
      className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/50 text-3xl text-white"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
      >
        {direction === 'north' && <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />}
        {direction === 'south' && <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />}
        {direction === 'west' && <path d="M15.75 19.5L8.25 12l7.5-7.5" />}
        {direction === 'east' && <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />}
      </svg>
    </button>
  )
}
