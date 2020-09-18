import {Throw} from "@/models/throw";

export class ThrowResult {
  private readonly playerOne: Throw;
  private readonly playerTwo: Throw;

  constructor(
    playerOne: Throw,
    playerTwo: Throw
  ) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  whoWins(): string {
    let result = 'Tie';
    if (this.playerTwo.isDefeatedBy(this.playerOne)) {
      result = 'First';
    }
    if (this.playerOne.isDefeatedBy(this.playerTwo)) {
      result = 'Second';
    }
    return result;
  }
}
