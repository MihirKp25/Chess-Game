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
import { fen_to_state } from "../Fen/Fenconversion";

function ChessBoard() {

  const chessboardref=useRef(null);
  const tiles = [];
  //this will be the temporary representation of chess board
  let chessboard = {
    "0a": null,
    "0b": null,
    "0c": null,
    "0d": null,
    "0e": null,
    "0f": null,
    "0g": null,
    "0h": null,
    "1a": null,
    "1b": null,
    "1c": null,
    "1d": null,
    "1e": null,
    "1f": null,
    "1g": null,
    "1h": null,
    "2a": null,
    "2b": null,
    "2c": null,
    "2d": null,
    "2e": null,
    "2f": null,
    "2g": null,
    "2h": null,
    "3a": null,
    "3b": null,
    "3c": null,
    "3d": null,
    "3e": null,
    "3f": null,
    "3g": null,
    "3h": null,
    "4a": null,
    "4b": null,
    "4c": null,
    "4d": null,
    "4e": null,
    "4f": null,
    "4g": null,
    "4h": null,
    "5a": null,
    "5b": null,
    "5c": null,
    "5d": null,
    "5e": null,
    "5f": null,
    "5g": null,
    "5h": null,
    "6a": null,
    "6b": null,
    "6c": null,
    "6d": null,
    "6e": null,
    "6f": null,
    "6g": null,
    "6h": null,
    "7a": null,
    "7b": null,
    "7c": null,
    "7d": null,
    "7e": null,
    "7f": null,
    "7g": null,
    "7h": null,
  };

  //vertical axis markings
  const change = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //horizantal axis markings 0, 1, 2, 3.....so on

  //enter your fen dtring here to make initial setup
  // "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" for initial position
  chessboard=fen_to_state("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");


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
            image={chessboard[s]}
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
            image={chessboard[s]}
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
