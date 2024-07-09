export const getWindDirection = (degrees: number): string | undefined => {
  const directions = [
    { min: 0, max: 30, direction: "North" },
    { min: 31, max: 60, direction: "North-east" },
    { min: 61, max: 120, direction: "East" },
    { min: 121, max: 150, direction: "South-east" },
    { min: 151, max: 210, direction: "South" },
    { min: 211, max: 240, direction: "South-west" },
    { min: 241, max: 300, direction: "West" },
    { min: 301, max: 330, direction: "North-west" },
    { min: 331, max: 360, direction: "North" },
  ];

  return directions.find(({ min, max }) => (degrees >= min && degrees <= max))?.direction;
};
