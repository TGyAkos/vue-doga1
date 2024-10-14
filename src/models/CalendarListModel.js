import {CalendarModel} from "./CalendarModel.js";

export class CalendarListModel {
    idCounter = 0
    list = []

    addCalendar(calendar) {
        calendar = this.convertToObject(calendar)
        calendar.id = this.idCounter
        this.list.push(calendar)
        this.idCounter++
    }

    removeCalendar(id) {
        this.list = this.list.filter((item) => item.id !== parseInt(id))
    }

    convertToObject(user) {
        return Object.assign(new CalendarModel(), JSON.parse(JSON.stringify(user)))
    }
}