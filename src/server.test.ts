import { theMeaningOfLife } from './server';

describe(theMeaningOfLife.name, () => {
  it('Will probably need to figure out the question', () => {
    const meaning = theMeaningOfLife();
    expect(meaning).toBe(42);
  });
  it('Is not 43', () => {
    const meaning = theMeaningOfLife();
    expect(meaning).not.toBe(43);
  });
});
