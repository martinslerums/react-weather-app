import { getSeason, Season } from './getSeason';
import { Hemisphere } from './getHemisphere';

describe('getSeason', () => {
  it('should return Spring for March, April, May in Northern Hemisphere', () => {
    expect(getSeason(2, Hemisphere.Northern)).toBe(Season.Spring);
    expect(getSeason(3, Hemisphere.Northern)).toBe(Season.Spring);
    expect(getSeason(4, Hemisphere.Northern)).toBe(Season.Spring);
  });

  it('should return Summer for June, July, August in Northern Hemisphere', () => {
    expect(getSeason(5, Hemisphere.Northern)).toBe(Season.Summer);
    expect(getSeason(6, Hemisphere.Northern)).toBe(Season.Summer);
    expect(getSeason(7, Hemisphere.Northern)).toBe(Season.Summer);
  });

  it('should return Fall for September, October, November in Northern Hemisphere', () => {
    expect(getSeason(8, Hemisphere.Northern)).toBe(Season.Fall);
    expect(getSeason(9, Hemisphere.Northern)).toBe(Season.Fall);
    expect(getSeason(10, Hemisphere.Northern)).toBe(Season.Fall);
  });

  it('should return Winter for December, January, February in Northern Hemisphere', () => {
    expect(getSeason(11, Hemisphere.Northern)).toBe(Season.Winter);
    expect(getSeason(0, Hemisphere.Northern)).toBe(Season.Winter);
    expect(getSeason(1, Hemisphere.Northern)).toBe(Season.Winter);
  });

  it('should return Fall for March, April, May in Southern Hemisphere', () => {
    expect(getSeason(2, Hemisphere.Southern)).toBe(Season.Fall);
    expect(getSeason(3, Hemisphere.Southern)).toBe(Season.Fall);
    expect(getSeason(4, Hemisphere.Southern)).toBe(Season.Fall);
  });

  it('should return Winter for June, July, August in Southern Hemisphere', () => {
    expect(getSeason(5, Hemisphere.Southern)).toBe(Season.Winter);
    expect(getSeason(6, Hemisphere.Southern)).toBe(Season.Winter);
    expect(getSeason(7, Hemisphere.Southern)).toBe(Season.Winter);
  });

  it('should return Spring for September, October, November in Southern Hemisphere', () => {
    expect(getSeason(8, Hemisphere.Southern)).toBe(Season.Spring);
    expect(getSeason(9, Hemisphere.Southern)).toBe(Season.Spring);
    expect(getSeason(10, Hemisphere.Southern)).toBe(Season.Spring);
  });

  it('should return Summer for December, January, February in Southern Hemisphere', () => {
    expect(getSeason(11, Hemisphere.Southern)).toBe(Season.Summer);
    expect(getSeason(0, Hemisphere.Southern)).toBe(Season.Summer);
    expect(getSeason(1, Hemisphere.Southern)).toBe(Season.Summer);
  });

  it('should throw an error for an invalid month', () => {
    expect(() => getSeason(12, Hemisphere.Northern)).toThrow('Invalid month');
    expect(() => getSeason(-1, Hemisphere.Northern)).toThrow('Invalid month');
  });
});
