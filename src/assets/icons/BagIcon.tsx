import React from 'react'

const BagIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`bag_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z'></path>
    </svg>
  )
}

export default BagIcon
