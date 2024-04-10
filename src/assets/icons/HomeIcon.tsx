import React from 'react'

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`home_icon ${className}`}
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export default HomeIcon
