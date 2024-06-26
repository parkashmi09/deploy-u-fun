import React from 'react'

const ArrowDownRightIcon: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <svg
      className={`arrow-down-right_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z'></path>
    </svg>
  )
}

export default ArrowDownRightIcon
