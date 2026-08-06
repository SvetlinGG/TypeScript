abstract class Course {
    public title: string;
    public duration: number;

    abstract getDescription(): string;

    constructor(title: string, duration: number){
        this.title = title;
        this.duration = duration;

    }
}

class ProgrammingCourse extends Course {
    language: string;
    constructor(title: string, duration: number, language: string){
        super(title, duration);
        this.language = language;
    }
    getDescription(){
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`
    }
}

class DesignCourse extends Course {
    tools: string[];
    constructor(title: string, duration: number, tools: string[]){
        super(title, duration);
        this.tools = tools;
    }
    getDescription(){
        return `Design Course: ${this.title} using ${this.tools.join(', ')} - ${this.duration} hours`
    }
}

const jsCourse = new ProgrammingCourse('Intro to JavaScript', 40, 'JavaScript');
const uiCourse = new DesignCourse('UX Fundamentals', 30, ['Figma', 'Sketch']);

console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());






























// abstract class Course {
    

//     constructor(public title: string, public duration: number){
        
//     }


//     abstract getDescription(): string 

    
// }

// class ProgrammingCourse extends Course {

//     constructor(title: string, duration: number, public language: string){
//         super( title, duration)
//     }
//     override getDescription(): string{
//         return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours.`
//     }
// }

// class DesignCourse extends Course {
//     constructor(title: string, duration: number, public tools: string[]){
//         super(title, duration)
//     }

//     override getDescription(){
//         return `Design Course: ${this.title} using ${this.tools.join(', ')} - ${this.duration} hours.`

//     }
// }

// const jsCourse = new ProgrammingCourse('Intro to JavaScript', 40, 'JavaScript');
// const uiCourse = new DesignCourse('UX Fundamentals', 30, ['Figma', 'Sketch']);

// console.log(jsCourse.getDescription());
// console.log(uiCourse.getDescription());
