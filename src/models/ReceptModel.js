export class ReceptModel {
    id = 0
    name = ""
    ingredients = []
    time = null
    description = ""

    toString = () => {
        return `Recept: ${this.id}, ${this.name}, ${this.ingredients}, ${this.time}, ${this.description}`
    };
}