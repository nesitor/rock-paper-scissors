export interface Throw {
  throw: string;
  name: string;
  icon: string;

  isDefeatedBy(throwing: Throw): boolean;
};
