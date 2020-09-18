import { Throw } from '@/models/throw';

export class Scissors implements Throw {
  throw = 'scissors';
  name = 'Scissors';
  icon = 'hand-scissors';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing.throw === 'rock';
  }
}
