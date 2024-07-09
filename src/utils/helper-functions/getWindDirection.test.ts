import { getWindDirection } from './getWindDirection';

describe('getWindDirection', () => {
  it('should return "North" for degrees between 0 and 30', () => {
    expect(getWindDirection(0)).toBe('North');
    expect(getWindDirection(15)).toBe('North');
    expect(getWindDirection(30)).toBe('North');
  });

  it('should return "North-east" for degrees between 31 and 60', () => {
    expect(getWindDirection(31)).toBe('North-east');
    expect(getWindDirection(45)).toBe('North-east');
    expect(getWindDirection(60)).toBe('North-east');
  });

  it('should return "East" for degrees between 61 and 120', () => {
    expect(getWindDirection(61)).toBe('East');
    expect(getWindDirection(90)).toBe('East');
    expect(getWindDirection(120)).toBe('East');
  });

  it('should return "South-east" for degrees between 121 and 150', () => {
    expect(getWindDirection(121)).toBe('South-east');
    expect(getWindDirection(135)).toBe('South-east');
    expect(getWindDirection(150)).toBe('South-east');
  });

  it('should return "South" for degrees between 151 and 210', () => {
    expect(getWindDirection(151)).toBe('South');
    expect(getWindDirection(180)).toBe('South');
    expect(getWindDirection(210)).toBe('South');
  });

  it('should return "South-west" for degrees between 211 and 240', () => {
    expect(getWindDirection(211)).toBe('South-west');
    expect(getWindDirection(225)).toBe('South-west');
    expect(getWindDirection(240)).toBe('South-west');
  });

  it('should return "West" for degrees between 241 and 300', () => {
    expect(getWindDirection(241)).toBe('West');
    expect(getWindDirection(270)).toBe('West');
    expect(getWindDirection(300)).toBe('West');
  });

  it('should return "North-west" for degrees between 301 and 330', () => {
    expect(getWindDirection(301)).toBe('North-west');
    expect(getWindDirection(315)).toBe('North-west');
    expect(getWindDirection(330)).toBe('North-west');
  });

  it('should return "North" for degrees between 331 and 360', () => {
    expect(getWindDirection(331)).toBe('North');
    expect(getWindDirection(345)).toBe('North');
    expect(getWindDirection(360)).toBe('North');
  });

  it('should return undefined for degrees outside the range 0-360', () => {
    expect(getWindDirection(-1)).toBeUndefined();
    expect(getWindDirection(361)).toBeUndefined();
  });
});
