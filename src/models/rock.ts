import { Throw } from '@/models/throw';

export class Rock implements Throw {
  throw = 'rock';
  name = 'Rock';
  icon = 'hand-rock';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing.throw === 'paper';
  }
}
