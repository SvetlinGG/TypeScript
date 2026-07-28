enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfor(): string
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date){
        this.start = start;
        this.end = end;
    }

    set start(val: Date){
        if ( val > this._end){
            throw new Error("Start date cannot be later than end date");
        }
        this._start = val;
    }

    set end(val: Date){
        if ( val < this._start){
            throw new Error("End date cannot be earlier than start date")
        }
        this._end = val;
    }
    getInfo(): string{
        let startDate = `${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()}`;
        let endDate = `${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;

        return `Holiday: ${startDate} - ${endDate}`;
    }
}