import React from 'react'
import './Tiles.css';

function BoardSquare(props) {

  //pieces imagea are made as background of div\
  let check=true;
  if(props.image===undefined)
  {
    check=false;
  } 
  return (
    <div className='w-[70px] h-[70px] text-blue-600' id='tiles' style={{backgroundColor: props.bgcolor}}>
      
      {check && 
        <div className='square' style={{backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', width: "70px", height: "70px"}}>
        </div>
      }
      
    </div>
  )
}

export default BoardSquare