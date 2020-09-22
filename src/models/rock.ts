import { Throw } from '@/models/throw';
import { Paper } from "@/models/paper";
import { Spock } from "@/models/spock";

export class Rock implements Throw {
  throw = 'rock';
  name = 'Rock';
  icon = 'hand-rock';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Paper || throwing instanceof Spock;
  }
}
