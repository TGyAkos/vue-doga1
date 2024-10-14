import {ref} from "vue";

export class PlayerModel {
    id = 0
    name = ""
    counter = ref(0)

    toString = () => {
        return `Player: ${this.id}, ${this.name}`
    };
}