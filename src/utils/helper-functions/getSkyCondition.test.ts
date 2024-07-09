import { getSkyCondition } from './getSkyCondition';

describe('getSkyCondition', () => {
  it('should return the base UV index for "clear" sky description', () => {
    expect(getSkyCondition('clear', 0, 10)).toBe(10);
    expect(getSkyCondition('CLEAR', 0, 8)).toBe(8);
  });

  it('should return 80% of the base UV index for "clouds" with cloud intensity less than 50', () => {
    expect(getSkyCondition('clouds', 30, 10)).toBe(8);
    expect(getSkyCondition('CLOUDS', 49, 8)).toBe(6.4);
  });

  it('should return 50% of the base UV index for "clouds" with cloud intensity 50 or greater', () => {
    expect(getSkyCondition('clouds', 50, 10)).toBe(5);
    expect(getSkyCondition('clouds', 70, 8)).toBe(4);
  });

  it('should return 30% of the base UV index for any other sky description', () => {
    expect(getSkyCondition('rain', 0, 10)).toBe(3);
    expect(getSkyCondition('fog', 0, 8)).toBe(2.4);
    expect(getSkyCondition('partly cloudy', 0, 10)).toBe(3);
  });
});
