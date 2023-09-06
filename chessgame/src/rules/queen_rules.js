import { check_bishop } from "./bishop_rules";
import { check_rook } from "./rook_rules";
function piecepresent(x, y, pieces) {
    const present = pieces.find((p) => {
      if (p.x === x && p.y === y) {
        return true;
      }
    });
    if (present) {
      return true;
    }
    return false;
  }
  
  function isEnemyPresent(x, y, pieces, type) {
    const present = pieces.find((p) => {
      if (p.x === x && p.y === y && p.type != type) {
        return true;
      }
    });
    if (present) {
      return true;
    }
    return false;
  }
  
  export function check_queen(
    initial_pos_x,
    initial_pos_y,
    final_pos_x,
    final_pos_y,
    name,
    type,
    pieces
  ) {
    let bishop;
    let rook;
    bishop=check_bishop(initial_pos_x,initial_pos_y,final_pos_x,final_pos_y,name,type,pieces);
    rook=check_rook(initial_pos_x,initial_pos_y,final_pos_x,final_pos_y,name,type,pieces);
    if(bishop===1 || rook===1){
      return 1;
    }
    else if(bishop===-1 || rook===-1){
      return -1;
    }
    else{
      return 0;
    } 
  }
  