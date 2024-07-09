export enum Hemisphere {
  Northern = 'Northern',
  Southern = 'Southern'
}

export const getHemisphere = (latitude: number): Hemisphere => {
  return latitude >= 0 ? Hemisphere.Northern : Hemisphere.Southern;
};
