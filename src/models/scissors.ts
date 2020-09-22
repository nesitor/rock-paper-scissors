import { Throw } from '@/models/throw';
import { Rock } from "@/models/rock";
import { Spock } from "@/models/spock";

export class Scissors implements Throw {
  throw = 'scissors';
  name = 'Scissors';
  icon = 'hand-scissors';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Rock || throwing instanceof Spock;
  }
}
