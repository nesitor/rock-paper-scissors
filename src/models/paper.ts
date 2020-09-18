import { Throw } from '@/models/throw';

export class Paper implements Throw {
  throw = 'paper';
  name = 'Paper';
  icon = 'hand-paper';

  isDefeatedBy(throwing: Throw): boolean {
    return throwing.throw === 'scissors';
  }
}
