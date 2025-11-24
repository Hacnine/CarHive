import React from 'react'

export default function EmailButton({classes,onOpen, buttonName, icon}) {
  function handleClick(){
    onOpen();
  }
  return (
    <div>
      <button className={classes} onClick={handleClick} >{icon}{buttonName}</button>
    </div>
  )
}
