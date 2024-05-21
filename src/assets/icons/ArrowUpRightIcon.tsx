import React from 'react'

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`arrow-up-right_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'></path>
    </svg>
  )
}

export default ArrowUpRightIcon
