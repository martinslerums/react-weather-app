export const getForecastDays = () => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const todayIndex  = new Date().getDay();
  return WEEK_DAYS.slice(todayIndex , WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, todayIndex ));
};