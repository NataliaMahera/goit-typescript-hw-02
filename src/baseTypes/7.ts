/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday = "MON",
  Tuesday = "TUE",
  Wednesday = "WED",
  Thursday = "THU",
  Friday = "FRI",
  Saturday = "SAT",
  Sunday = "SUN",
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

if (isWeekend(WeekDay.Saturday || WeekDay.Sunday)) {
  console.log("Weekend!");
} else {
  console.log("Go work!");
}

export {};
