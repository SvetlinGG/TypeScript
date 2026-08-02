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

    if ( day in DaysOfTheWeek){
        console.log(DaysOfTheWeek[day]);
        
    }else{
        console.log('error');
        
    }
    //console.log(DaysOfTheWeek[day] || 'error');
    
}
getDayNumber(5);
getDayNumber(1);
getDayNumber(-5);