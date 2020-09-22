import { Throw } from '@/models/throw';
import { Rock } from "@/models/rock";

export class Scissors implements Throw {
  throw = 'scissors';
  name = 'Scissors';
  icon = 'hand-scissors';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Rock;
  }
}
