export class referee {
  piecepresent(x, y, pieces) {
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

  isEnemyPresent(x, y, pieces, type) {
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

  public;
  validmove(
    initial_pos_x,
    initial_pos_y,
    final_pos_x,
    final_pos_y,
    name,
    type,
    pieces
  ) {
    if (name === "pawn") {
      let t = type === "b" ? 1 : -1;
      if ((initial_pos_x - final_pos_x) * t > 0) return 0;
      if (initial_pos_y === final_pos_y) {
        if (initial_pos_x === (t === 1 ? 1 : 6)) {
          if (final_pos_x - initial_pos_x === (t === 1 ? 1 : -1)) {
            if (!this.piecepresent(final_pos_x, final_pos_y, pieces)) return 1;
            else return 0;
          } else if (final_pos_x - initial_pos_x === (t === 1 ? 2 : -2)) {
            if (
              !this.piecepresent(final_pos_x, final_pos_y, pieces) &&
              !this.piecepresent(final_pos_x - t, final_pos_y, pieces)
            ) {
              return 1;
            } else return 0;
          }
        } else if (t * (final_pos_x - initial_pos_x) <= 1) {
          if (!this.piecepresent(final_pos_x, final_pos_y, pieces)) return 1;
          else return 0;
        } else {
          return 0;
        }
      } else {
        if (
          t * (final_pos_x - initial_pos_x) == 1 &&
          (final_pos_y - initial_pos_y == 1 ||
            final_pos_y - initial_pos_y == -1)
        ) {
          if (this.isEnemyPresent(final_pos_x, final_pos_y, pieces, type)) {
            return -1;
          }
          return 0;
        }
        else return 0;
      }
    }
    return 0;
  }
}
