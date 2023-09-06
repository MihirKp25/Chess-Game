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
  
  export function check_knight(
    initial_pos_x,
    initial_pos_y,
    final_pos_x,
    final_pos_y,
    name,
    type,
    pieces
  ) {
    if((Math.abs(final_pos_x-initial_pos_x)===2&&Math.abs(final_pos_y-initial_pos_y)==1)||(Math.abs(final_pos_x-initial_pos_x)===1&&Math.abs(final_pos_y-initial_pos_y)==2))
    {
        if(piecepresent(final_pos_x,final_pos_y,pieces))
        {
            if(isEnemyPresent(final_pos_x,final_pos_y,pieces,type))
            {
            return -1;
            }
            else
            {
            return 0;
            }
        }
        else
        {
            return 1;
        }   
    }
    return 0;
  }
  