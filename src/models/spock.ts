import { Throw } from '@/models/throw';
import {Paper} from "@/models/paper";
import {Lizard} from "@/models/lizard";

export class Spock implements Throw {
  throw = 'spock';
  name = 'Spock';
  icon = 'hand-spock';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing instanceof Paper || throwing instanceof Lizard;
  }
}
