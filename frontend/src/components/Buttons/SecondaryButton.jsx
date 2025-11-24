import React from 'react'

const SecondaryButton = ({className='bg-blue-500 hover:bg-blue-400' , buttonName}) => {
  const arr = [1,2,3,4,5];
  const checkout =() =>(
    console.log(
      arr.reduce((accumulator, currentValue)=>{
        debugger;
        return accumulator + currentValue;
      })
    )
   
  )
  const clickHandler = 
  ["Proceed to Checkout"].includes(buttonName) ? checkout : null;

  return (
    <div>
      <button className={`${className} text-white-green px-6 py-2 rounded`} onClick={clickHandler}>{buttonName}</button>
    </div>
  )
}

export default SecondaryButton
