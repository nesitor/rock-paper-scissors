import { Throw } from '@/models/throw';
import { Scissors } from "@/models/scissors";

export class Paper implements Throw {
  throw = 'paper';
  name = 'Paper';
  icon = 'hand-paper';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Scissors;
  }
}
