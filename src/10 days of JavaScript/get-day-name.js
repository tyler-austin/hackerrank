const getDayName = dateString => {
  const daysOfWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  const day = new Date(dateString).getDay();
  return daysOfWeek[day];
};

export default getDayName;
