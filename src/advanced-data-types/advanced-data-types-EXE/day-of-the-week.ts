enum WeekDay  {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function dayOfTheWeek(day: number){
    if (day in WeekDay){
        console.log(WeekDay[day]);
        
    }else{
        console.log("Invalid Day");
}
}
dayOfTheWeek(1);
dayOfTheWeek(5);
dayOfTheWeek(60);