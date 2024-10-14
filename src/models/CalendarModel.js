export class CalendarModel {
    id = 0
    name = ""
    date = ""
    description = ""

    toString = () => {
        return `Calendar: ${this.id}, ${this.name}, ${this.date}, ${this.description}`
    };
}