import React from 'react'

function BoardSquare(props) {

  
  return (
    <div className='w-[70px] h-[70px] text-blue-600' style={{backgroundColor: props.bgcolor}}>
      
      <div className='square' style={{backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', width: "70px", height: "70px"}}>
      </div>
    </div>
  )
}

export default BoardSquare