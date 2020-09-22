import { Throw } from '@/models/throw';
import { Scissors } from "@/models/scissors";
import { Rock } from "@/models/rock";

export class Lizard implements Throw {
  throw = 'lizard';
  name = 'Lizard';
  icon = 'hand-lizard';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Rock || throwing instanceof Scissors;
  }
}
