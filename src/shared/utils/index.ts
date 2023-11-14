interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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

  // ! Returning the time left as an object
  return {
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft,
    seconds: secondsLeft,
  };
}
