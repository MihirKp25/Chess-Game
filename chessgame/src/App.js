import Home from "./board/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessBoard from "./board/chessBoard";
import { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Context from "./context/context.js";
import knight_w from "./assets/knight_w.png";
import knight_b from "./assets/knight_b.png";
import bishop_w from "./assets/bishop_w.png";
import bishop_b from "./assets/bishop_b.png";
import king_b from "./assets/king_b.png";
import king_w from "./assets/king_w.png";
import pawn_w from "./assets/pawn_w.png";
import pawn_b from "./assets/pawn_b.png";
import queen_w from "./assets/queen_w.png";
import queen_b from "./assets/queen_b.png";
import rook_b from "./assets/rook_b.png";
import rook_w from "./assets/rook_w.png";
function App() {
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
  // useEffect(() => {
  //   console.log("i am rendering");
  //   setPieces(initialBoard);
  // }, []);
  
  const data=window.localStorage.getItem('MyBoard_state');
  const [pieces, setPieces] = useState(data!==null ? JSON.parse(data) : initialBoard);
  
  useEffect(()=>{
    if(data!==null)
    {
      setPieces(JSON.parse(data));
    }
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('MYBoard_state', JSON.stringify(pieces));
  }, [pieces])

  return (
    <Context.Provider value={{ pieces, setPieces }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chessboard" element={<ChessBoard />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
