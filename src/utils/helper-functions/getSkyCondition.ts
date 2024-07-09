export const getSkyCondition = (description: string, cloudIntensity: number, baseUVIndex: number): number => {
  const skyCondition = description.toLowerCase();
  
  switch (skyCondition) {
    case 'clear':
      return baseUVIndex;
    case 'clouds':
      return cloudIntensity < 50 ? baseUVIndex * 0.8 : baseUVIndex * 0.5
    default:
      return baseUVIndex * 0.3;
  }
};
