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


//FEN string (Forsyth Edwards Notation string)
const pieces = {
  p: pawn_b,
  P: pawn_w,
  b: bishop_b,
  B: bishop_w,
  k: king_b,
  K: king_w,
  n: knight_b,
  N: knight_w,
  q: queen_b,
  Q: queen_w,
  r: rook_b,
  R: rook_w,
};

const board = {
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

let arr = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const change = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function fen_to_state(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "/") {
      if (s[i].toUpperCase() === s[i].toLowerCase()) {
        let x = parseInt(s[i]);
        cnt += x;
      } else {
        arr[cnt] = pieces[s[i]];
        cnt++;
      }
    }
  }
  let t=0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let s = i + change[j];
        board[s]=arr[t];
        t++;
    }
  }

  return board;
  console.log(board);
  
}
