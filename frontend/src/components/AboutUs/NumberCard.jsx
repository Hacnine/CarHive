import React from 'react'

const NumberCard = ({num, title}) => {
  return (
    <>
      <p className=' text-primary-green font-bold font-serif sm:text-4xl text-2xl'>{num}</p>
      <p className=' font-bold font-serif md:text-xl text-sm text-white-green text-center'>{title}</p>
    </>
  )
}
// w-[260px] 127px
export default NumberCard
