import { check_bishop } from "./bishop_rules";
import { check_king } from "./king_rules";
import { check_knight } from "./knight_rules";
import { check_pawn } from "./pawn_rules";
import { check_queen } from "./queen_rules";
import { check_rook } from "./rook_rules";

export class referee {
  public;
  validmove(
    initial_pos_x,
    initial_pos_y,
    final_pos_x,
    final_pos_y,
    name,
    type,
    pieces,
    turn
  ) {
    if (type === turn) {
      if (name === "pawn") {
        return check_pawn(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      } else if (name === "rook") {
        return check_rook(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      } else if (name === "bishop") {
        return check_bishop(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      } else if (name === "knight") {
        return check_knight(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      } else if (name === "queen") {
        return check_queen(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      } else if (name === "king") {
        return check_king(
          initial_pos_x,
          initial_pos_y,
          final_pos_x,
          final_pos_y,
          name,
          type,
          pieces
        );
      }
    } else return 0;
  }
}
