export {}

enum WeekDay  {
    'Monday' = 1,
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
}




function reversedWeekDay(day: string){

    console.log(WeekDay[day as keyof typeof WeekDay] || 'error');
    
    
}

reversedWeekDay('Monday')
reversedWeekDay('Sunday')
reversedWeekDay('Invalid')