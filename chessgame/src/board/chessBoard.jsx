import React, { useEffect, useRef, useState } from "react";
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
  const chessboardref = useRef(null);
  const tiles = [];

  //this will be the temporary representation of chess board
  let chessboard = {
    "00": null,
    "01": null,
    "02": null,
    "03": null,
    "04": null,
    "05": null,
    "06": null,
    "07": null,
    "10": null,
    "11": null,
    "12": null,
    "13": null,
    "14": null,
    "15": null,
    "16": null,
    "17": null,
    "20": null,
    "21": null,
    "22": null,
    "23": null,
    "24": null,
    "25": null,
    "26": null,
    "27": null,
    "30": null,
    "31": null,
    "32": null,
    "33": null,
    "34": null,
    "35": null,
    "36": null,
    "37": null,
    "40": null,
    "41": null,
    "42": null,
    "43": null,
    "44": null,
    "45": null,
    "46": null,
    "47": null,
    "50": null,
    "51": null,
    "52": null,
    "53": null,
    "54": null,
    "55": null,
    "56": null,
    "57": null,
    "60": null,
    "61": null,
    "62": null,
    "63": null,
    "64": null,
    "65": null,
    "66": null,
    "67": null,
    "70": null,
    "71": null,
    "72": null,
    "73": null,
    "74": null,
    "75": null,
    "76": null,
    "77": null,
  };


  const [pieces, setPieces]=useState([]);
  const initialBoard=[];
  initialBoard.push({image: rook_b, x: 0, y: 0})
  initialBoard.push({image: knight_b, x: 0, y: 1})
  initialBoard.push({image: bishop_b, x: 0, y: 2})
  initialBoard.push({image: queen_b, x: 0, y: 3})
  initialBoard.push({image: king_b, x: 0, y: 4})
  initialBoard.push({image: bishop_b, x: 0, y: 5})
  initialBoard.push({image: knight_b, x: 0, y: 6})
  initialBoard.push({image: rook_b, x: 0, y: 7})

  initialBoard.push({image: pawn_b, x: 1, y: 0})
  initialBoard.push({image: pawn_b, x: 1, y: 1})
  initialBoard.push({image: pawn_b, x: 1, y: 2})
  initialBoard.push({image: pawn_b, x: 1, y: 3})
  initialBoard.push({image: pawn_b, x: 1, y: 4})
  initialBoard.push({image: pawn_b, x: 1, y: 5})
  initialBoard.push({image: pawn_b, x: 1, y: 6})
  initialBoard.push({image: pawn_b, x: 1, y: 7})

  initialBoard.push({image: rook_w, x: 7, y: 0})
  initialBoard.push({image: knight_w, x: 7, y: 1})
  initialBoard.push({image: bishop_w, x: 7, y: 2})
  initialBoard.push({image: queen_w, x: 7, y: 3})
  initialBoard.push({image: king_w, x: 7, y: 4})
  initialBoard.push({image: bishop_w, x: 7, y: 5})
  initialBoard.push({image: knight_w, x: 7, y: 6})
  initialBoard.push({image: rook_w, x: 7, y: 7})

  initialBoard.push({image: pawn_w, x: 6, y: 0})
  initialBoard.push({image: pawn_w, x: 6, y: 1})
  initialBoard.push({image: pawn_w, x: 6, y: 2})
  initialBoard.push({image: pawn_w, x: 6, y: 3})
  initialBoard.push({image: pawn_w, x: 6, y: 4})
  initialBoard.push({image: pawn_w, x: 6, y: 5})
  initialBoard.push({image: pawn_w, x: 6, y: 6})
  initialBoard.push({image: pawn_w, x: 6, y: 7})

  // setPieces(initialBoard)
  useEffect(()=>{
    setPieces(initialBoard);
  }, [])

  //vertical axis markings
  const change = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //horizantal axis markings 0, 1, 2, 3.....so on

  //enter your fen string here to make initial setup
  // "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" for initial position
  // chessboard = fen_to_state("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let image=undefined;
      pieces.map((p)=>{
        if(p.x===j&&p.y===i)
        {
          image=p.image;
        }
      })
      if ((i + j) % 2 == 0) {
        let s = j + change[i];
        tiles.push(
          <BoardSquare
            key={s}
            bgcolor={"#769656"}
            x={j}
            y={change[i]}
            image={image}
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
            image={image}
          />
        );
      }
    }
  }

  const [activeElement, setActiveelement] = useState(null);
  const [gridX, setX]=useState();
  const [gridY, setY]=useState();

  function grabPiece(e) {
    const element = e.target;
    const chessBoard=chessboardref.current;
    if (element.className == "square"&& chessBoard) {
      setActiveelement(e);
      element.style.position = "absolute";
      let x = e.clientX - 35;
      let y = e.clientY - 35;
      const gridx=Math.floor((e.clientX-chessBoard.offsetLeft)/70);
      const gridy=Math.abs(Math.floor((e.clientY-chessBoard.offsetTop)/70));
      // console.log(gridx, gridy);
      setX(gridx);
      setY(gridy);
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    }
  }

  function movePiece(e) {
    if (activeElement) {
      const element = activeElement.target;
      //constraints to keep the chess pieces on board only
      const minX = chessboardref.current.offsetLeft;
      const minY = chessboardref.current.offsetTop;
      const maxX = chessboardref.current.offsetLeft + 490;
      const maxY = chessboardref.current.offsetTop + 490;

      element.style.position = "absolute";
      let x = e.clientX - 35;
      let y = e.clientY - 35;
      element.style.left =
        x > minX && x < maxX ? `${x}px` : x < minX ? `${minX}px` : `${maxX}px`;
      element.style.top =
        y > minY && y < maxY ? `${y}px` : y < minY ? `${minY}px` : `${maxY}px`;
    }
  }

  function ungrab(e) {

    if (activeElement && chessboardref) {
      // console.log(activeElement);
      const chessBoard=chessboardref.current;
      // console.log(`x: ${Math.floor((activeElement.clientX-210)/70)+1}`);
      // console.log(`y: ${activeElement.clientY}`);
      const x=Math.floor((e.clientX-chessBoard.offsetLeft)/70);
      const y=Math.abs(Math.floor((e.clientY-chessBoard.offsetTop)/70));
      // console.log(x, y);
      // console.log(gridX, gridY);
      setPieces((value)=>{
        const pieces=value.map((p)=>{
          if(p.x===gridY&&p.y===gridX)
          {
            p.x=y;
            p.y=x;
            console.log("hello")
          }
          return p;
        })
        return pieces;
      })
      setActiveelement(null);
    }
  }
  return (
    <div className="bg-stone-800 h-screen grid content-center align-middle drop-shadow-2xl">
      <div
        onMouseUp={(e) => {
          ungrab(e);
        }}
        onMouseMove={(e) => {
          movePiece(e);
        }}
        onMouseDown={(e) => {
          grabPiece(e);
        }}
        className={`grid grid-rows-8 grid-flow-col w-[560px] m-auto`}
        ref={chessboardref}
      >
        {tiles}
      </div>
    </div>
  );
}

export default ChessBoard;
