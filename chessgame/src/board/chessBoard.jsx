import React, { useRef } from "react";
import BoardSquare from "./boardSquare";
import knight_w from "../assets/knight_w.png";
import knight_b from "../assets/knight_b.png";
import bishop_w from "../assets/bishop_w.png";
import bishop_b from "../assets/bishop_b.png";
import king_b from "../assets/king_b.png";
import king_w from "../assets/king_w.png";
import pawn_w from "../assets/pawn_w.png";
import pawn_b from "../assets/pawn_b.png";
import queen_w from "../assets/queen_w.png";
import queen_b from "../assets/queen_b.png";
import rook_b from "../assets/rook_b.png";
import rook_w from "../assets/rook_w.png";

function ChessBoard() {

  const chessboardref=useRef(null);
  const tiles = [];
  //these are the initial postions of chess board
  const initial_pos = {
    "0a": rook_b,
    "0b": knight_b,
    "0c": bishop_b,
    "0d": queen_b,
    "0e": king_b,
    "0f": bishop_b,
    "0g": knight_b,
    "0h": rook_b,
    "1a": pawn_b,
    "1b": pawn_b,
    "1c": pawn_b,
    "1d": pawn_b,
    "1e": pawn_b,
    "1f": pawn_b,
    "1g": pawn_b,
    "1h": pawn_b,
    "7a": rook_w,
    "7b": knight_w,
    "7c": bishop_w,
    "7d": queen_w,
    "7e": king_w,
    "7f": bishop_w,
    "7g": knight_w,
    "7h": rook_w,
    "6a": pawn_w,
    "6b": pawn_w,
    "6c": pawn_w,
    "6d": pawn_w,
    "6e": pawn_w,
    "6f": pawn_w,
    "6g": pawn_w,
    "6h": pawn_w,
  };

  //vertical axis markings
  const change = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //horizantal axis markings 0, 1, 2, 3.....so on

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {


      if ((i + j) % 2 == 0) {
        let s = j + change[i];
        tiles.push(
          <BoardSquare
            key={s}
            bgcolor={"#769656"}
            x={j}
            y={change[i]}
            image={initial_pos[s]}
          />
        );
      } else {
        let s = j + change[i];
        tiles.push(
          <BoardSquare
            key={s}
            bgcolor={"#eeeed2"}
            x={j}
            y={change[i]}
            image={initial_pos[s]}
          />
        );
      }

      
    }
  }
  
  let activeElement=undefined;

  function grabPiece(e){ 
    const element=e.target;
    if(element.className=='square')
    {
      activeElement=e;
      element.style.position="absolute";
      let x=e.clientX-35;
      let y=e.clientY-35;
      element.style.left=`${x}px`;
      element.style.top=`${y}px`;
      // console.log(element);
    }
  }

  function movePiece(e){
    // console.log(e.target);
    if(activeElement)
    {

      const element=activeElement.target;
      //constraints to keep the chess pieces on board only  
        const minX=chessboardref.current.offsetLeft;
        const minY=chessboardref.current.offsetTop;
        const maxX=chessboardref.current.offsetLeft+490;
        const maxY=chessboardref.current.offsetTop+490;
      
        element.style.position="absolute";
        let x=e.clientX-35;
        let y=e.clientY-35;
        element.style.left=x>minX&&x<maxX ? `${x}px` : x<minX ? `${minX}px` : `${maxX}px`;
        element.style.top=y>minY&&y<maxY ? `${y}px` : y<minY ? `${minY}px` : `${maxY}px`;
    }
    
  }

  function ungrab(e){
    if(activeElement)
    {
      activeElement=undefined;
    }
  }
  return (
    <div className="bg-stone-800 h-screen grid content-center align-middle drop-shadow-2xl">
      <div onMouseUp={(e)=>{ungrab(e)}} onMouseMove={(e)=>{movePiece(e)}} onMouseDown={(e)=>grabPiece(e)} className={`grid grid-rows-8 grid-flow-col w-[560px] m-auto`} ref={chessboardref}>
        {tiles}
      </div>
    </div>
  );
}

export default ChessBoard;
