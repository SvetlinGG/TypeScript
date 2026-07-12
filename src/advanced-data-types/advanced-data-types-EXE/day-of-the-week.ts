enum WeekDay  {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function dayOfTheWeek(day: number): string {
    switch (day) {
        case WeekDay.Monday:
            return "Monday";
        case WeekDay.Tuesday:
            return "Tuesday";
        case WeekDay.Wednesday:
            return "Wednesday";
        case WeekDay.Thursday:
            return "Thursday";
        case WeekDay.Friday:
            return "Friday";
        case WeekDay.Saturday:
            return "Saturday";
        case WeekDay.Sunday:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
console.log(dayOfTheWeek(1));
console.log(dayOfTheWeek(5));
console.log(dayOfTheWeek(60));