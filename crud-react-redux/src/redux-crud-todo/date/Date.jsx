export const dateFormat = date => {
  const formattedDate = new Date(date);
  // firstly we need date convert to date(argument) object because we sended it in format IsoString to backend to let backend work with it propertly

  const currentDate = new Date();
  const currentMilliSeconds = currentDate.getTime();
  const currentSecond = currentDate.getSeconds();
  const currentMinute = currentDate.getMinutes();
  const currentHour = currentDate.getHours();
  const currentWeekDayIndex = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const formattedMilliSeconds = formattedDate.getTime();
  const formattedSecond = formattedDate.getSeconds();
  const formattedMinute = formattedDate.getMinutes();
  const formattedHour = formattedDate.getHours();
  const formattedWeekDayIndex = formattedDate.getDay();
  const formattedDayOfMonth = formattedDate.getDate();
  const formattedMonthIndex = formattedDate.getMonth();
  const formattedYear = formattedDate.getFullYear();

  /**
   * ! Month 30 or 31 days or February
   */

  const monthsWith31Days = [0, 2, 4, 6, 7, 9, 11];

  const findDaysInMoth = monthDays => {
    if (monthsWith31Days.includes(monthDays)) {
      return 31;
    } else if (monthDays === 1) {
      return 28;
    } else {
      return 30;
    }
  };

  /**
   * ! ========== DIFFERENCE BETWEEN 2 DATES =============
   * ? Here we calculate how much time ago post is sended
   */

  // #1 Difference with properties
  const difference = currentMilliSeconds - formattedMilliSeconds;

  const seconds = Math.floor(difference / 1000); // ms*1000=sec
  const minutes = Math.floor(seconds / 60); // sec*60=min
  const hours = Math.floor(minutes / 60); // min*60=hour
  const days = Math.floor(hours / 24); // hour*24=day

  if (minutes < 1) {
    return `Created ${seconds} seconds ago`;
  } else if (hours < 1) {
    return `Created ${minutes === 1 ? 'a minute' : minutes + ' minutes'} ago`;
  } else if (hours < 24) {
    return `Created ${hours === 1 ? 'an hour' : hours + ' hours'} ago`;
  } else if (days === 7) {
    return `Created a week ago`;
  } else if (
    days < 7 ||
    (days > 7 && days <= findDaysInMoth(formattedMonthIndex))
  ) {
    return `Created ${days} days ago`;
  } else {
    return new Intl.DateTimeFormat('en-GB')
      .format(formattedDate)
      .replaceAll('/', '-');
  }

  /**
   * ! BIRHTDAY NOTIFICATION
   */

  if (
    currentDayOfMonth === formattedDayOfMonth && // 👈  same day
    currentMonthIndex === formattedMonthIndex && //👈  same month
    (currentHour > 15 || // 👈 send notification after 16 p.m
      (currentHour === 15 && currentMinute >= 30)) // 👈 send notification on 15:30 p.m
  ) {
    return 'Today is your birthday';
  } else {
    const timeDifference = Math.ceil(
      Math.abs(currentMilliSeconds - formattedMilliSeconds) /
        1000 /
        60 /
        60 /
        24
    );

    let message = 'Your birthday ';

    message +=
      timeDifference > 1
        ? `will be ${
            currentDayOfMonth - formattedDayOfMonth === 1
              ? 'tomorrow'
              : `after ${timeDifference} days`
          }`
        : `was ${timeDifference} day${timeDifference === 1 ? '' : 's'} ago`;

    return message;
  }
};
