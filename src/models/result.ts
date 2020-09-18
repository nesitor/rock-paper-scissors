import { Throw } from "@/models/throw";

class ThrowResult {
  static whoWins(playerOne: Throw, playerTwo: Throw): string {
    let result = 'Tie';
    if (playerTwo.isDefeatedBy(playerOne)) {
      result = 'First';
    }
    if (playerOne.isDefeatedBy(playerTwo)) {
      result = 'Second';
    }
    return result;
  }
}

export default ThrowResult;
