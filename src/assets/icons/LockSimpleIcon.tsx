import React from "react"

const LockSimpleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`lock-simple_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z'></path>
    </svg>
  )
}

export default LockSimpleIcon
