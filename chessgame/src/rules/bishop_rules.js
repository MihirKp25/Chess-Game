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

export function check_bishop(
  initial_pos_x,
  initial_pos_y,
  final_pos_x,
  final_pos_y,
  name,
  type,
  pieces
) {
  if (
    Math.abs(final_pos_x - initial_pos_x) ===
    Math.abs(final_pos_y - initial_pos_y)
  ) {
    if (final_pos_y > initial_pos_y) {
      if (final_pos_x > initial_pos_x) {
        for (let i = initial_pos_x + 1; i < final_pos_x; i++) {
          if (piecepresent(i, initial_pos_y + i - initial_pos_x, pieces))
            return 0;
        }
      } else {
        for (let i = initial_pos_x - 1; i > final_pos_x; i--) {
          if (piecepresent(i, initial_pos_y + initial_pos_x-i, pieces))
            return 0;
        }
      }
    } else {
      if (final_pos_x > initial_pos_x) {
        for (let i = initial_pos_x + 1; i < final_pos_x; i++) {
          if (piecepresent(i, initial_pos_y - i + initial_pos_x, pieces))
            return 0;
        }
      } else {
        for (let i = initial_pos_x - 1; i > final_pos_x; i--) {
          if (piecepresent(i, initial_pos_y + i - initial_pos_x, pieces))
            return 0;
        }
      }
    }

    if (isEnemyPresent(final_pos_x, final_pos_y, pieces, type)) return -1;
    else return 1;
  } else {
    return 0;
  }
}
