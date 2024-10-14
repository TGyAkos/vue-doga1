import {ReceptModel} from "./ReceptModel.js";

export class ReceptListModel {
    idCounter = 0
    receptList = []

    addRecept(recept) {
        recept = this.convertToObject(recept)
        recept.id = this.idCounter
        recept.time = parseInt(recept.time ?? "0")
        recept.ingredients = recept.ingredients.split(" ") ?? ""
        this.receptList.push(recept)
        this.idCounter++
    }

    removeRecept(id) {
        this.receptList = this.receptList.filter((item) => item.id !== parseInt(id))
    }

    convertToObject(user) {
        return Object.assign(new ReceptModel(), JSON.parse(JSON.stringify(user)))
    }
}