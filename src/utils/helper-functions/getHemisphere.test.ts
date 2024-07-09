import { getHemisphere, Hemisphere } from './getHemisphere';

describe('getHemisphere', () => {
  it('should return Northern Hemisphere for positive latitudes', () => {
    expect(getHemisphere(0)).toBe(Hemisphere.Northern);
    expect(getHemisphere(23.5)).toBe(Hemisphere.Northern);
    expect(getHemisphere(45)).toBe(Hemisphere.Northern);
    expect(getHemisphere(90)).toBe(Hemisphere.Northern);
  });

  it('should return Southern Hemisphere for negative latitudes', () => {
    expect(getHemisphere(-0.1)).toBe(Hemisphere.Southern);
    expect(getHemisphere(-23.5)).toBe(Hemisphere.Southern);
    expect(getHemisphere(-45)).toBe(Hemisphere.Southern);
    expect(getHemisphere(-90)).toBe(Hemisphere.Southern);
  });
});
