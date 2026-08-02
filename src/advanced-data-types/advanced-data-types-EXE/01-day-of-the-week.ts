enum DaysOfTheWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayNumber(day: number){
    console.log(DaysOfTheWeek[day] || 'error');
    
}
getDayNumber(5);
getDayNumber(1);
getDayNumber(-5);