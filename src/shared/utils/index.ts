interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function calculateTimeLeft(targetDate: Date): TimeLeft {
  const currentDate = new Date();
  const timeLeft = targetDate.getTime() - currentDate.getTime();

  // ! Converting milliseconds to days, hours, minutes, and seconds
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const validatingZero = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  };

  // ! Returning the time left as an object
  return {
    days: validatingZero(daysLeft),
    hours: validatingZero(hoursLeft),
    minutes: validatingZero(minutesLeft),
    seconds: validatingZero(secondsLeft),
  };
}
