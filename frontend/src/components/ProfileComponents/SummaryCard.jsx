import { MdLocalOffer } from 'react-icons/md'

const SummaryCard = ({Icon, number, title}) => {
  
  return (
    
        <div className=' bg-white-green rounded-md flex flex-col items-center justify-between gap-4 px-3 pt-10 pb-7 md:h-[110%] h-[90%] w-[100%] border'>
            <Icon className={` ${Icon ===MdLocalOffer? 'md:w-11 md:h-11 w-7 h-7':'md:w-10 md:h-10 w-9 h-9'} text-primary-green `}/>
            <div className="flex items-center justify-center space-x-2">
                <h1 className='text-slate-blue md:text-4xl text-2xl font-open font-bold'>{number}</h1>
                <p className='text-gray-600 md:font-medium text-sm'>{title}</p>
            </div>
        </div>
      
  )
}

export default SummaryCard
