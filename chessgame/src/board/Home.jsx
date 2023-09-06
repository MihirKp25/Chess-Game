import React from "react";
import ChessBoard from "./chessBoard";
import { Link, Router } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Context.Provider value={{pieces, setPieces}}> */}
      <Link to={{ pathname: "/chessboard" }}>start game</Link>
      {/* </Context.Provider> */}
    </div>
  );
}

export default Home;
