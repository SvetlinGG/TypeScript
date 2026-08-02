enum DayOfTheWeek {
    'Monday' = 1,
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',

}

function reverseDays(day: string): void{
    console.log(DayOfTheWeek[day as keyof typeof DayOfTheWeek] || 'error');
        
}

reverseDays('Monday');
reverseDays('Friday');
reverseDays('One');