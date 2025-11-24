import React from 'react'

const Address = ({address, title}) => {
  return (
    <div>
      <div className=' text-xl font-open font-bold text-slate-blue'>{title}</div>
      <div>
        <p className=' font-sm font-open text-gray-600'>{address}</p>
      </div>
    </div>
  )
}

export default Address
