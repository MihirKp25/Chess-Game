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
// import { validmove } from "../rules/rules";
import { referee } from "../rules/rules";

function ChessBoard() {
  const chessboardref = useRef(null);
  const tiles = [];
  const Referee = new referee();

  //this will be the temporary representation of chess board
  const obj = { image: null, x: null, y: null, name: null, type: null };

  const initialBoard = [];
  initialBoard.push({ image: rook_b, x: 0, y: 0, name: "rook", type: "b" });
  initialBoard.push({ image: knight_b, x: 0, y: 1, name: "knight", type: "b" });
  initialBoard.push({ image: bishop_b, x: 0, y: 2, name: "bishop", type: "b" });
  initialBoard.push({ image: queen_b, x: 0, y: 3, name: "queen", type: "b" });
  initialBoard.push({ image: king_b, x: 0, y: 4, name: "king", type: "b" });
  initialBoard.push({ image: bishop_b, x: 0, y: 5, name: "bishop", type: "b" });
  initialBoard.push({ image: knight_b, x: 0, y: 6, name: "knight", type: "b" });
  initialBoard.push({ image: rook_b, x: 0, y: 7, name: "rook", type: "b" });

  initialBoard.push({ image: pawn_b, x: 1, y: 0, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 1, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 2, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 3, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 4, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 5, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 6, name: "pawn", type: "b" });
  initialBoard.push({ image: pawn_b, x: 1, y: 7, name: "pawn", type: "b" });

  initialBoard.push({ image: rook_w, x: 7, y: 0, name: "rook", type: "w" });
  initialBoard.push({ image: knight_w, x: 7, y: 1, name: "knight", type: "w" });
  initialBoard.push({ image: bishop_w, x: 7, y: 2, name: "bishop", type: "w" });
  initialBoard.push({ image: queen_w, x: 7, y: 3, name: "queen", type: "w" });
  initialBoard.push({ image: king_w, x: 7, y: 4, name: "king", type: "w" });
  initialBoard.push({ image: bishop_w, x: 7, y: 5, name: "bishop", type: "w" });
  initialBoard.push({ image: knight_w, x: 7, y: 6, name: "knight", type: "w" });
  initialBoard.push({ image: rook_w, x: 7, y: 7, name: "rook", type: "w" });

  initialBoard.push({ image: pawn_w, x: 6, y: 0, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 1, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 2, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 3, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 4, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 5, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 6, name: "pawn", type: "w" });
  initialBoard.push({ image: pawn_w, x: 6, y: 7, name: "pawn", type: "w" });

  const [pieces, setPieces] = useState([]);

  // setPieces(initialBoard)
  useEffect(() => {
    setPieces(initialBoard);
  }, []);

  //vertical axis markings
  const change = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //horizantal axis markings 0, 1, 2, 3.....so on

  //enter your fen string here to make initial setup
  // "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" for initial position
  // chessboard = fen_to_state("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let image = undefined;
      pieces.map((p) => {
        if (p.x === j && p.y === i) {
          image = p.image;
        }
      });
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
  const [gridX, setX] = useState();
  const [gridY, setY] = useState();

  function grabPiece(e) {
    const element = e.target;
    const chessBoard = chessboardref.current;
    if (element.className == "square" && chessBoard) {
      setActiveelement(e);
      console.log(e);
      element.style.position = "absolute";
      let x = e.clientX - 35;
      let y = e.clientY - 35;
      const gridx = Math.floor((e.clientX - chessBoard.offsetLeft) / 70);
      const gridy = Math.abs(
        Math.floor((e.clientY - chessBoard.offsetTop) / 70)
      );
      // console.log(gridx, gridy);
      setX(gridy);
      setY(gridx);
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      console.log(e.target);
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
      const chessBoard = chessboardref.current;
      // console.log(`x: ${Math.floor((activeElement.clientX-210)/70)+1}`);
      // console.log(`y: ${activeElement.clientY}`);
      const y = Math.floor((e.clientX - chessBoard.offsetLeft) / 70);
      const x = Math.abs(Math.floor((e.clientY - chessBoard.offsetTop) / 70));
      // console.log(x, y);
      // console.log(gridX, gridY);
      let maarnewala=pieces.find((p)=>{
        if(p.x===gridX&&p.y==gridY)
        {
          return true;
        }
      })
      let marnewala=pieces.find((p)=>{
        if(p.x===x&&p.y==y)
        {
          return true;
        }
      })

      console.log(maarnewala);
      console.log(marnewala);
      let check = Referee.validmove(
        gridX,
        gridY,
        x,
        y,
        maarnewala.name,
        maarnewala.type,
        pieces
      );

      if(check==1)
      {

        let updatedPieces=pieces.reduce((res, p)=>{
          if(p.x==gridX&&p.y===gridY)
          {
            p.x = x;
            p.y = y;
          }
          res.push(p);
          return res;
        }, []
        )
        setPieces(updatedPieces);
      }
      else if(check==-1)
      {
        let updatedPieces=pieces.reduce((res, p)=>{
          if(p.x==gridX&&p.y===gridY)
          {
            p.x = x;
            p.y = y;
            res.push(p);
          }
          else if(!(p.x===marnewala.x&&p.y==marnewala.y))
          {
            res.push(p);
          }
          return res;
        }, [])
        setPieces(updatedPieces);
      }
      else{
          activeElement.target.style.position = "relative";
              console.log(activeElement);
              activeElement.target.style.top = "0px";
              activeElement.target.style.left = "0px";
      }

      console.log(pieces);
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
