import React from 'react'

const ChecksIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`checks-icon ${className}`}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 256 256'
    >
      <path d='M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z'></path>
    </svg>
  )
}

export default ChecksIcon
