import React from 'react'

const ProfileCard = ({img, name, email}) => {
  return (
<>
{img? 
  <img src={img} alt="Profile Image"
  className='h-10 w-10 rounded-full ring-2 ring-primary-green' />
:
<div className='flex items-center justify-center flex-col gap-1'>
      <img src={img} alt="Profile Image"
      className='h-36 w-36 rounded-full ring-4 ring-primary-green' />
      <h4 className=' text-xl font-bold text-slate-blue font-open text-center'>{name}</h4>
      <p className='font-bold text-sm text-gray-500 font-open text-center'>{email}</p>
    </div>
}

</>
    
    
  )
}

export default ProfileCard
