import { Hemisphere } from './getHemisphere';

export enum Season {
  Spring = 'Spring',
  Summer = 'Summer',
  Fall = 'Fall',
  Winter = 'Winter'
}

export const getSeason = (month: number, hemisphere: Hemisphere): Season => {
  switch (month) {
    case 2: // March
    case 3: // April
    case 4: // May
      return hemisphere === Hemisphere.Northern ? Season.Spring : Season.Fall;
    case 5: // June
    case 6: // July
    case 7: // August
      return hemisphere === Hemisphere.Northern ? Season.Summer : Season.Winter;
    case 8: // September
    case 9: // October
    case 10: // November
      return hemisphere === Hemisphere.Northern ? Season.Fall : Season.Spring;
    case 11: // December
    case 0: // January
    case 1: // February
      return hemisphere === Hemisphere.Northern ? Season.Winter : Season.Summer;
    default:
      throw new Error('Invalid month');
  }
};
